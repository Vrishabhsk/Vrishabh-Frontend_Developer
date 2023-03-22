<?php
/**
 * Entry point of the API
 * 
 * PHP version 7.4.33
 * 
 * @category API
 * @package  Spacex_API
 * @author   Vrishabh <vrishabhsk@gmail.com>
 * @license  NA <>
 * @link     NA
 */
require_once './vendor/autoload.php';

$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

require_once './autoloader.php';

define('CAPSULE_ENDPOINT', $_ENV['SPACE_ENDPOINT'] . '/capsules');

use Controllers\Capsules_Controller;
use Config\Error_Handler;
use Config\Validation_Utils;

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET');

/**
 * Wrapper for API functionality
 * 
 * @category API
 * @package  Spacex_API
 * @author   Vrishabh <vrishabhsk@gmail.com>
 * @license  NA <>
 * @link     NA
 */
class Space_Handler
{

    private $_request_uri;
    private $_capsule_controller;
    private $_filters;

    private $_status_types = ['active', 'retired', 'destroyed', 'unknown'];
    private $_types_of_capsule = ['Dragon 1.0', 'Dragon 1.1', 'Dragon 2.0'];

    /**
     * Create controller instance and make request if request is valid.
     *
     * @param string $request_uri The request URL.
     */
    public function __construct($request_uri)
    {
        $this->_request_uri = $request_uri;

        if ('capsules' !== $this->_request_uri[1]) {
            Error_Handler::notFound();
        }
        
        $this->_capsule_controller = new Capsules_Controller();

        $this->_filters = [];

        if (!empty($_GET['capsule_serial']) 
            && ctype_alnum($_GET['capsule_serial'])
        ) {
            $this->_filters['capsule_serial'] = $_GET['capsule_serial'];
        }

        if (!empty($_GET['status'])  
            && in_array($_GET['status'], $this->_status_types)
        ) {
            $this->_filters['status'] = $_GET['status'];
        }

        if (!empty($_GET['type']) 
            && in_array($_GET['type'], $this->_types_of_capsule)
        ) {
            $this->_filters['type'] = $_GET['type'];
        }

        if (!empty($_GET['launch']) ) {
            $this->_filters['launch'] = $_GET['launch'];
        }
        
        $this->getCapsules();
    }


    /**
     * Validate access key received in the URI.
     *
     * @return void
     */
    private function _validateRequest()
    {
        $user_api_key = isset($_GET['api_key']) ? $_GET['api_key'] : null;

        if ($_ENV['ACCESS_KEY'] !== $user_api_key ) {
            Error_Handler::unauthorizedErr();
        }
    }

    /**
     * Make request to Spacex API
     *
     * @return void
     */
    public function getCapsules()
    {
        $this->_validateRequest();
        echo $this->_capsule_controller->fetchCapsules($this->_filters);
    }
}

$request_uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$request_uri = explode('/', $request_uri);

$space_capsules = new Space_Handler($request_uri);


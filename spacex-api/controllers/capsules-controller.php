<?php
/**
 * Logic for making requests to SpaceX API
 * 
 * PHP version 7.4.33
 * 
 * @category API
 * @package  Spacex_API
 * @author   Vrishabh <vrishabhsk@gmail.com>
 * @license  NA <>
 * @link     NA
 */
namespace Controllers;

/**
 * Wrapper for Capsule API Calls
 * 
 * @category API
 * @package  Spacex_API
 * @author   Vrishabh <vrishabhsk@gmail.com>
 * @license  NA <>
 * @link     NA
 */
class Capsules_Controller
{
    private $_capsule_endpoint = CAPSULE_ENDPOINT;
    private $_data = [];
    private $_params = '';
    private $_serial_exists = false;
    private $_status_exists = false;
    private $_type_exists = false;

    /**
     * Fetch Capsules data from SpaceX API with filters.
     *
     * @param array $filters Fitler applied for the request.
     * 
     * @return void
     */
    public function fetchCapsules($filters = [])
    {
        if (empty($filters)) {
            $this->_data = file_get_contents($this->_capsule_endpoint);
            return $this->_data;
        }

        if (array_key_exists('capsule_serial', $filters)) {
            $this->_serial_exists = true;
            $this->_params .= '?capsule_serial=' . $filters['capsule_serial'];
        }

        if (array_key_exists('status', $filters)) {
            $this->_status_exists = true;
            if ($this->_serial_exists) {
                $this->_params .= '&status=' . $filters['status'];
            } else {
                $this->_params .= '?status=' . $filters['status'];
            }
        }

        if (array_key_exists('type', $filters)) {
            $this->_type_exists = true;
            if ($this->_status_exists) {
                $this->_params .= '&type=' . $filters['type'];
            } else {
                $this->_params .= '?type=' . $filters['type'];
            }
        }

        if (array_key_exists('launch', $filters)) {
            if ($this->_status_exists || $this->_type_exists) {
                $this->_params .= '&original_launch=' . $filters['launch'];
            } else {
                $this->_params .= '?original_launch=' . $filters['launch'];
            }
        }

        $this->_data = file_get_contents($this->_capsule_endpoint . $this->_params);
        return $this->_data;
    }
}

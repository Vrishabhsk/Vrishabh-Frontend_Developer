<?php
/**
 * Error HAndling Logic
 * 
 * PHP version 7.4.33
 * 
 * @category API
 * @package  Spacex_API
 * @author   Vrishabh <vrishabhsk@gmail.com>
 * @license  NA <>
 * @link     NA
 */
namespace Config;

/**
 * Wrapper for Error Functions
 * 
 * @category API
 * @package  Spacex_API
 * @author   Vrishabh <vrishabhsk@gmail.com>
 * @license  NA <>
 * @link     NA
 */
class Error_Handler
{
    /**
     * Unauthorized Error.
     *
     * @param string $message Custom Message.
     * 
     * @return void
     */
    public static function unauthorizedErr($message = 'Unauthorized Access!')
    {
        header('HTTP/1.1 401 Unauthorized Access');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => $message, 'code' => 401)));
    }

    /**
     * Invalid Request
     *
     * @param string $message Custom Message.
     * 
     * @return void
     */
    public static function notFound($message = 'Invalid Request!')
    {
        header('HTTP/1.1 404 Not Found');
        header('Content-Type: application/json; charset=UTF-8');
        die(json_encode(array('message' => $message, 'code' => 404)));
    }
}

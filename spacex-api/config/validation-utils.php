<?php
/**
 * Validation utilities
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
 * Wrapper for utility functions.
 *  
 * @category API
 * @package  Spacex_API
 * @author   Vrishabh <vrishabhsk@gmail.com>
 * @license  NA <>
 * @link     NA
 */
class Validation_Utils
{
    /**
     * Validate date string.
     *
     * @param string $date   Date Input to validate.
     * @param string $format Format to validate against.
     * 
     * @return void
     */
    public static function validateDate($date, $format = 'Y-m-d')
    {
        $d = \DateTime::createFromFormat($format, $date);
        return $d && $d->format($format) === $date;
    }
}
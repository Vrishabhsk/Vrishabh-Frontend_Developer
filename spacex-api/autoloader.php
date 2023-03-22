<?php
/**
 * Autloader Functionality
 * 
 * PHP version 7.4.33
 * 
 * @category API
 * @package  Spacex_API
 * @author   Vrishabh <vrishabhsk@gmail.com>
 * @license  NA <>
 * @link     NA
 */

spl_autoload_register('autoloader');

/**
 * Function that checks the existence of a file by generating the file path
 *
 * The argument is the namespace which will be in the format of the directory.
 *
 * @param string $class_name The namespace of the class or trait to be invoked.
 * 
 * @return void|bool
 */
function autoloader( $class_name )
{
    // final file path after string operations.
    $class_path = str_replace(array( '\\', '_' ), array( '/', '-' ), strtolower($class_name));

    $full_path = __DIR__ . '/' . $class_path . '.php';

    if (! file_exists($full_path) ) {
        return;
    }

    include_once __DIR__ . '/' . $class_path . '.php';
}


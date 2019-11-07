/*----------------------------------------------------------------------- */
/* Copyright © 2018 - 2019 | RailcarRx | All Rights Reserved              */
/*----------------------------------------------------------------------- */
/* Name: Email Notification Handler                                       */
/* Desr:                                                                  */
/* Version: 1.0                                                           */
/* Author: Mohan Kodali                                                   */
/*----------------------------------------------------------------------- */
/*----------------------------------------------------------------------- */
/* Implementation                                                         */
/*----------------------------------------------------------------------- */
var io = require('socket.io-client');

// exports.handler = async (event) => {
//     var socket = io.connect("http://localhost:3000");
//     socket.emit('ysrailcar', { Railcar: 'SYMK100200' });
//     return 'Sent message!';
// };

var socket = io.connect("http://localhost:3000");
socket.emit('ysrailcar', { Railcar: 'SYMK100200' });
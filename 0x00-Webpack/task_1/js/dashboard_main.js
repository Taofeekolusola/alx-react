import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

$(document).ready(function() {
    const $dashboardTitle = $('<p>').text('Holberton Dashboard');
    const $dashboardData = $('<p>').text('Dashboard data for the students');
    const $button = $('<button>').text('Click here to get started');
    const $count = $('<p>').attr('id', 'count');
    const $copyright = $('<p>').text('Copyright - Holberton School');

    $('body').append($dashboardTitle, $dashboardData, $button, $count, $copyright);

    $button.on('click', _.debounce(updateCounter, 500));
});

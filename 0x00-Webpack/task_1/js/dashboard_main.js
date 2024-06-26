import $ from 'jquery';
import debounce from 'lodash/debounce';

function addElements() {
    const $dashboardTitle = $('<p>').text('Holberton Dashboard');
    const $dashboardInfo = $('<p>').text('Dashboard data for the students');
    const $startButton = $('<button>').text('Click here to get started');
    const $countParagraph = $('<p>').attr('id', 'count');
    const $copyright = $('<p>').text('Copyright - Holberton School');

    $('body').append($dashboardTitle, $dashboardInfo, $startButton, $countParagraph, copyright);

    $startButton.on('click', debounce(updateCounter, 300));
}

let clickCount = 0;
function updateCounter() {
    clickCount++;
    $('#count').text(`${clickCount} clicks on the button`);
}

$(document).ready(function() {
    addElements();
});

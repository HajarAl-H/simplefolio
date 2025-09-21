<?php
// counter.php

$file = 'visits.txt';

// If the file doesn't exist, create it with 0
if (!file_exists($file)) {
    file_put_contents($file, 0);
}

// Only increment if you want, or just read
$visits = (int)file_get_contents($file);
$visits++; // increment on every page load
file_put_contents($file, $visits);

// For private viewing, just display a secret key
if (isset($_GET['key']) && $_GET['key'] === 'HAJAR') {
    echo "Total visits: " . $visits;
} else {
    // Hide for normal visitors
    echo "";
}
?>

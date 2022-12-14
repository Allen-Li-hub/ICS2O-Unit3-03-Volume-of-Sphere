// Created by: Allen li
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit3-03-Volume-of-Sphere/sw.js", {
    scope: "/ICS2O-Unit3-03-Volume-of-Sphere/",
  })
}
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate() {
  const radius = parseInt(document.getElementById("radius-of-circle").value)
  // process
  const volume = (4 / 3) * Math.PI * radius ** 3
  // output
  document.getElementById("volume").innerHTML =
    "<p>Volume is " + volume.toFixed(2) + " cm³</p>"
}

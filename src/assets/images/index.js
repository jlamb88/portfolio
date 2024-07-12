import React from 'react';
import empireScreenshot from './empire-screenshot.png'
import foresomeScreenshot from './foresome-screenshot.png'
import weatherScreenshot from './weather-screenshot.png'

const EmpireScreenshot = ({ className }) => <img src={empireScreenshot} className={className} alt='EmpireScreenshot' aria-label="Screenshot of Empire Cheeesecake website" />
const ForesomeScreenshot = ({ className }) => <img src={foresomeScreenshot} className={className} alt='ForesomeScreenshot' aria-label="Screenshot of Foresome website" />
const WeatherNowScreenshot = ({ className }) => <img src={weatherScreenshot} className={className} alt='WeatherNowScreenshot' aria-label="Screenshot of Weather Now website" />
const GithubIcon = ({ width = "48", height = "48", color = "var(--text-color)" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={width} height={height}>
        <path fill={color} d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z" /></svg>
)

const LinkedInIcon = ({ width = "36", height = "36", color = "var(--text-color)" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" width={width} height={height} >
        <path fill={color} d="M 21.125 0 L 4.875 0 C 2.183594 0 0 2.183594 0 4.875 L 0 21.125 C 0 23.816406 2.183594 26 4.875 26 L 21.125 26 C 23.816406 26 26 23.816406 26 21.125 L 26 4.875 C 26 2.183594 23.816406 0 21.125 0 Z M 8.039063 22.070313 L 4 22.070313 L 3.976563 9.976563 L 8.015625 9.976563 Z M 5.917969 8.394531 L 5.894531 8.394531 C 4.574219 8.394531 3.722656 7.484375 3.722656 6.351563 C 3.722656 5.191406 4.601563 4.3125 5.945313 4.3125 C 7.289063 4.3125 8.113281 5.191406 8.140625 6.351563 C 8.140625 7.484375 7.285156 8.394531 5.917969 8.394531 Z M 22.042969 22.070313 L 17.96875 22.070313 L 17.96875 15.5 C 17.96875 13.910156 17.546875 12.828125 16.125 12.828125 C 15.039063 12.828125 14.453125 13.558594 14.171875 14.265625 C 14.066406 14.519531 14.039063 14.867188 14.039063 15.222656 L 14.039063 22.070313 L 9.945313 22.070313 L 9.921875 9.976563 L 14.015625 9.976563 L 14.039063 11.683594 C 14.5625 10.875 15.433594 9.730469 17.519531 9.730469 C 20.105469 9.730469 22.039063 11.417969 22.039063 15.046875 L 22.039063 22.070313 Z" /></svg>)

const EmailIcon = ({ width = "50", height = "64", color = "var(--text-color)" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width={width} height={height} viewBox="0 0 500 640">
        <style type="text/css">
            {`.st0{display:none;}
        .st1{display:inline;} 
        .st2{fill:{color};stroke:{color};stroke-width:0.1;stroke-miterlimit:10;}
        `}</style>

        <g class="st0">
            <g class="st1">
                <rect class="st2" width="512" height="512" />
                <line class="st2" x1="0" y1="496" x2="512" y2="496" />
                <line class="st2" x1="0" y1="480" x2="512" y2="480" /><line class="st2" x1="0" y1="464" x2="512" y2="464" />
                <line class="st2" x1="0" y1="448" x2="512" y2="448" /><line class="st2" x1="0" y1="432" x2="512" y2="432" />
                <line class="st2" x1="0" y1="416" x2="512" y2="416" /><line class="st2" x1="0" y1="400" x2="512" y2="400" />
                <line class="st2" x1="0" y1="384" x2="512" y2="384" /><line class="st2" x1="0" y1="368" x2="512" y2="368" />
                <line class="st2" x1="0" y1="352" x2="512" y2="352" /><line class="st2" x1="0" y1="336" x2="512" y2="336" />
                <line class="st2" x1="0" y1="320" x2="512" y2="320" /><line class="st2" x1="0" y1="304" x2="512" y2="304" />
                <line class="st2" x1="0" y1="288" x2="512" y2="288" /><line class="st2" x1="0" y1="272" x2="512" y2="272" />
                <line class="st2" x1="0" y1="256" x2="512" y2="256" /><line class="st2" x1="0" y1="240" x2="512" y2="240" />
                <line class="st2" x1="0" y1="224" x2="512" y2="224" /><line class="st2" x1="0" y1="208" x2="512" y2="208" />
                <line class="st2" x1="0" y1="192" x2="512" y2="192" /><line class="st2" x1="0" y1="176" x2="512" y2="176" />
                <line class="st2" x1="0" y1="160" x2="512" y2="160" /><line class="st2" x1="0" y1="144" x2="512" y2="144" />
                <line class="st2" x1="0" y1="128" x2="512" y2="128" /><line class="st2" x1="0" y1="112" x2="512" y2="112" />
                <line class="st2" x1="0" y1="96" x2="512" y2="96" /><line class="st2" x1="0" y1="80" x2="512" y2="80" />
                <line class="st2" x1="0" y1="64" x2="512" y2="64" /><line class="st2" x1="0" y1="48" x2="512" y2="48" />
                <line class="st2" x1="0" y1="32" x2="512" y2="32" /><line class="st2" x1="0" y1="16" x2="512" y2="16" />
                <line class="st2" x1="496" y1="0" x2="496" y2="512" />
                <line class="st2" x1="480" y1="0" x2="480" y2="512" /><line class="st2" x1="464" y1="0" x2="464" y2="512" />
                <line class="st2" x1="448" y1="0" x2="448" y2="512" /><line class="st2" x1="432" y1="0" x2="432" y2="512" />
                <line class="st2" x1="416" y1="0" x2="416" y2="512" /><line class="st2" x1="400" y1="0" x2="400" y2="512" />
                <line class="st2" x1="384" y1="0" x2="384" y2="512" /><line class="st2" x1="368" y1="0" x2="368" y2="512" />
                <line class="st2" x1="352" y1="0" x2="352" y2="512" /><line class="st2" x1="336" y1="0" x2="336" y2="512" />
                <line class="st2" x1="320" y1="0" x2="320" y2="512" /><line class="st2" x1="304" y1="0" x2="304" y2="512" />
                <line class="st2" x1="288" y1="0" x2="288" y2="512" /><line class="st2" x1="272" y1="0" x2="272" y2="512" />
                <line class="st2" x1="256" y1="0" x2="256" y2="512" /><line class="st2" x1="240" y1="0" x2="240" y2="512" />
                <line class="st2" x1="224" y1="0" x2="224" y2="512" /><line class="st2" x1="208" y1="0" x2="208" y2="512" />
                <line class="st2" x1="192" y1="0" x2="192" y2="512" /><line class="st2" x1="176" y1="0" x2="176" y2="512" />
                <line class="st2" x1="160" y1="0" x2="160" y2="512" /><line class="st2" x1="144" y1="0" x2="144" y2="512" />
                <line class="st2" x1="128" y1="0" x2="128" y2="512" /><line class="st2" x1="112" y1="0" x2="112" y2="512" />
                <line class="st2" x1="96" y1="0" x2="96" y2="512" /><line class="st2" x1="80" y1="0" x2="80" y2="512" />
                <line class="st2" x1="64" y1="0" x2="64" y2="512" /><line class="st2" x1="48" y1="0" x2="48" y2="512" />
                <line class="st2" x1="32" y1="0" x2="32" y2="512" /><line class="st2" x1="16" y1="0" x2="16" y2="512" /></g></g>
        <path fill={color} d="M256,6C117.9,6,6,117.9,6,256s111.9,250,250,250s250-111.9,250-250S394.1,6,256,6z M400.7,154.5l-145.6,98.3l-143.8-98.3  H400.7z M106,164l118.7,82.5L106,345.9V164z M108.4,357.5l126.4-105.2l20.5,13l22-15.3l125.1,107.5H108.4z M406,346.9l-118.9-102  L406,162.6V346.9z" /></svg>
)


export { EmpireScreenshot, ForesomeScreenshot, WeatherNowScreenshot, GithubIcon, LinkedInIcon, EmailIcon }

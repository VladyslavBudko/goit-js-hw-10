!function(){function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={fetchCountries:function(t){var n="https://restcountries.com/v3.1/name/".concat(t);return fetch(n).then((function(t){return t.json()}))}};var o,i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=l||s||Function("return this")(),v=Object.prototype.toString,y=Math.max,p=Math.min,m=function(){return d.Date.now()};function b(n){var e=void 0===n?"undefined":t(i)(n);return!!n&&("object"==e||"function"==e)}function g(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(i)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==v.call(n)}(n))return NaN;if(b(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=b(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(r,"");var o=c.test(n);return o||f.test(n)?a(n.slice(2),o?2:8):u.test(n)?NaN:+n}o=function(t,n,e){var o,i,r,u,c,f,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(n){var e=o,r=i;return o=i=void 0,a=n,u=t.apply(r,e)}function h(t){return a=t,c=setTimeout(x,n),l?v(t):u}function j(t){var e=t-f;return void 0===f||e>=n||e<0||s&&t-a>=r}function x(){var t=m();if(j(t))return T(t);c=setTimeout(x,function(t){var e=n-(t-f);return s?p(e,r-(t-a)):e}(t))}function T(t){return c=void 0,d&&o?v(t):(o=i=void 0,u)}function w(){var t=m(),e=j(t);if(o=arguments,i=this,f=t,e){if(void 0===c)return h(f);if(s)return c=setTimeout(x,n),v(f)}return void 0===c&&(c=setTimeout(x,n)),u}return n=g(n)||0,b(e)&&(l=!!e.leading,r=(s="maxWait"in e)?y(g(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),w.cancel=function(){void 0!==c&&clearTimeout(c),a=0,o=f=i=c=void 0},w.flush=function(){return void 0===c?u:T(m())},w};var h={inputEl:document.querySelector("#search-box"),countryListEl:document.querySelector(".country-list"),countryInfoEl:document.querySelector(".country-info")};function j(t){t.preventDefault();var n=t.target.value;e.fetchCountries(n).then(x).catch(T).finally((function(){return console.log("Ищем ,".concat(n))}))}function x(t){var n=function(t){return t.map((function(t){var n=t.flags,e=t.name;return'\n      <li class="country-list_item" \n      style="list-style:none; margin-bottom:20px; \n      display:flex; align-items: center;">\n          <img style="max-width:10%" src="'.concat(n.svg,'" alt="').concat(e.official,'" />\n          <div>').concat(e.official,"</div>\n      </li>")})).join("")}(t);h.countryListEl.innerHTML=n}function T(t){alert("Country not found")}h.inputEl.addEventListener("input",j),t(o)(j,300)}();
//# sourceMappingURL=index.46e348c4.js.map

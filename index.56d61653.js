function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={fetchCountries:function(t){return fetch(`https://restcountries.com/v3.1/name/${t}`).then((t=>t.json()))}};var o,i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,y=Math.min,p=function(){return s.Date.now()};function m(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=m(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var e=u.test(t);return e||f.test(t)?c(t.slice(2),e?2:8):r.test(t)?NaN:+t}o=function(t,n,e){var o,i,r,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=o,r=i;return o=i=void 0,a=n,u=t.apply(r,e)}function h(t){return a=t,f=setTimeout(T,n),l?g(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-a>=r}function T(){var t=p();if(j(t))return E(t);f=setTimeout(T,function(t){var e=n-(t-c);return s?y(e,r-(t-a)):e}(t))}function E(t){return f=void 0,d&&o?g(t):(o=i=void 0,u)}function w(){var t=p(),e=j(t);if(o=arguments,i=this,c=t,e){if(void 0===f)return h(c);if(s)return f=setTimeout(T,n),g(c)}return void 0===f&&(f=setTimeout(T,n)),u}return n=b(n)||0,m(e)&&(l=!!e.leading,r=(s="maxWait"in e)?v(b(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=i=f=void 0},w.flush=function(){return void 0===f?u:E(p())},w};const g={inputEl:document.querySelector("#search-box"),countryListEl:document.querySelector(".country-list"),countryInfoEl:document.querySelector(".country-info")};function h(t){t.preventDefault();const n=t.target;console.log(n.value);const o=n.value;e.fetchCountries(o).then(j).catch(T)}function j(t){const n=function(t){t[0].map((({flags:t,name:n})=>`<li class="country-list_item">\n        <div>\n          <img src="${t.svg}" alt="flag" />\n          ${n.oficial}\n        </div>\n      </li>`)).join("")}(t);g.countryListEl.innerHTML=n}function T(t){alert("Country not found")}g.inputEl.addEventListener("input",h),t(o)(h,300);
//# sourceMappingURL=index.56d61653.js.map
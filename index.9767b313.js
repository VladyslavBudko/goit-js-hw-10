function t(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={fetchCountries:function(t){return fetch(`https://restcountries.com/v3.1/name/${t}`).then((t=>t.json()))}};var o,i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,l="object"==typeof n&&n&&n.Object===Object&&n,a="object"==typeof self&&self&&self.Object===Object&&self,s=l||a||Function("return this")(),d=Object.prototype.toString,y=Math.max,p=Math.min,v=function(){return s.Date.now()};function m(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(m(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=m(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(i,"");var e=u.test(t);return e||f.test(t)?c(t.slice(2),e?2:8):r.test(t)?NaN:+t}o=function(t,n,e){var o,i,r,u,f,c,l=0,a=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(n){var e=o,r=i;return o=i=void 0,l=n,u=t.apply(r,e)}function h(t){return l=t,f=setTimeout(x,n),a?g(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-l>=r}function x(){var t=v();if(j(t))return T(t);f=setTimeout(x,function(t){var e=n-(t-c);return s?p(e,r-(t-l)):e}(t))}function T(t){return f=void 0,d&&o?g(t):(o=i=void 0,u)}function $(){var t=v(),e=j(t);if(o=arguments,i=this,c=t,e){if(void 0===f)return h(c);if(s)return f=setTimeout(x,n),g(c)}return void 0===f&&(f=setTimeout(x,n)),u}return n=b(n)||0,m(e)&&(a=!!e.leading,r=(s="maxWait"in e)?y(b(e.maxWait)||0,n):r,d="trailing"in e?!!e.trailing:d),$.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=c=i=f=void 0},$.flush=function(){return void 0===f?u:T(v())},$};const g={inputEl:document.querySelector("#search-box"),countryListEl:document.querySelector(".country-list"),countryInfoEl:document.querySelector(".country-info")};function h(t){t.preventDefault();const n=t.target.value;e.fetchCountries(n).then(j).catch(x).finally((()=>console.log(`Ищем ,${n}`)))}function j(t){const n=function(t){return t.map((({flags:t,name:n})=>`\n      <li class="country-list_item" \n      style="list-style:none; margin-bottom:20px; \n      display:flex; align-items: center;">\n          <img style="max-width:10%" src="${t.svg}" alt="${n.official}" />\n          <div>${n.official}</div>\n      </li>`)).join("")}(t);g.countryListEl.innerHTML=n}function x(t){alert("Country not found")}g.inputEl.addEventListener("input",h),t(o)(h,300);
//# sourceMappingURL=index.9767b313.js.map

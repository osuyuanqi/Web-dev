### Bootstrap
- UX: simplicity->space, consistency
- color meaningness: 
  - > red - energetic, yellow - attention, purple - wealth, green - food/fruit, blue - trustworthy(financial)
- position: fixed, used in the navigation bar
- center alignment->margin: 0 auto; width: 10%
- embeded font keeps consistent: fonts.google.com
- responsive = adaptive, desktop/pad/phone has different layout-> use class="row"->"col-md-6", instead of "col-6" (fixed in all platforms). 
- layout tips: The bigger the device(e.g.sm,md,lg), the smaller part they occupied. e.g. medium device means ≥768px, use 6 units=6/12=50%=apply breakpoint=large device could use, so the smaller one= [100%](https://stackoverflow.com/questions/19865158/what-is-the-difference-among-col-lg-col-md-and-col-sm-in-bootstrap);)
- [font awsome](https://fontawesome.com/): collect logo & font
  - use->add kit v6 
    - > <script src="https://kit.fontawesome.com/2b987bc1c1.js" crossorigin="anonymous"></script>, OR, <script defer src="https://pro.fontawesome.com/releases/v5.10.0/js/all.js"></script>
    - [different version keywords](https://fontawesome.com/v6.0/docs/web/add-icons/how-to) ->fas, far, fal, fad, fab, fat
      > e.g. 4 times, \<i class="fas fa-heart fa-4x">\</i>
- z-index, defaut->0, only works when has any position property(relative/absolute)
- responsive design: @media type <feature>, check sth is true: e.g. 
  >@media (max-width: 1028px) {
  #title {
    text-align: center;
  }}
 >use browser: set header, meta name="viewport" content="width=device-width, initial-scale=1.0"
- minify css file [improves loading speed](https://www.cleancss.com/css-minify/)

### CSS
- percentage:fill all space; fr: only fill available free space, [diff](https://stackoverflow.com/questions/45090726/the-difference-between-percentage-and-fr-units);

### Node.js
- nodemon: auto restart package
- API auth -> order doesn't matter. e.g.www.xxxorg?a=xx&b=xx same as www.xxxorg?b=xx&a=xx 
- postman: beauty the json code


### Others
- HTML order rule: 
> Unlike CSS and JavaScript, HTML code is executed from top to bottom so the order of your code matters.
- mock up [tool](https://balsamiq.cloud/)
- Git ignore: git rm --cached -r
- [AJAX](https://www.w3schools.com/whatis/whatis_ajax.asp) = Asynchronous JavaScript And XML, it allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.
- Alt/option + drag <-add same contents all line in Mac




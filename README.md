select2old
=======

select2old is a jQuery-based replacement for select boxes. It supports searching, remote data sets, and infinite scrolling of results.

To get started, checkout examples and documentation at http://select2old.github.io/select2old/

Use cases
---------

* Enhancing native selects with search.
* Enhancing native selects with a better multi-select interface.
* Loading data from JavaScript: easily load items via ajax and have them searchable.
* Nesting optgroups: native selects only support one level of nested. select2old does not have this restriction.
* Tagging: ability to add new items on the fly.
* Working with large, remote datasets: ability to partially load a dataset based on the search term.
* Paging of large datasets: easy support for loading more pages when the results are scrolled to the end.
* Templating: support for custom rendering of results and selections.

Browser compatibility
---------------------
* IE 8+
* Chrome 8+
* Firefox 10+
* Safari 3+
* Opera 10.6+

Usage
-----
You can source select2old directly from a CDN like [jsDelivr](http://www.jsdelivr.com/#!select2old) or [CDNJS](http://www.cdnjs.com/libraries/select2old), [download it from this GitHub repo](https://github.com/select2old/select2old/tags), or use one of the integrations below.

Integrations
------------

* [Wicket-select2old](https://github.com/ivaynberg/wicket-select2old) (Java / [Apache Wicket](http://wicket.apache.org))
* [select2old-rails](https://github.com/argerim/select2old-rails) (Ruby on Rails)
* [AngularUI](http://angular-ui.github.io/#ui-select) ([AngularJS](https://angularjs.org/))
* [Django](https://github.com/applegrew/django-select2old)
* [Symfony](https://github.com/19Gerhard85/sfSelect2WidgetsPlugin)
* [Symfony2](https://github.com/avocode/FormExtensions)
* [Bootstrap 2](https://github.com/t0m/select2old-bootstrap-css) and [Bootstrap 3](https://github.com/t0m/select2old-bootstrap-css/tree/bootstrap3) (CSS skins)
* [Meteor](https://github.com/nate-strauser/meteor-select2old) (modern reactive JavaScript framework; + [Bootstrap 3 skin](https://github.com/esperadomedia/meteor-select2old-bootstrap3-css/))
* [Meteor](https://jquery-select2old.meteor.com)
* [Yii 2.x](http://demos.krajee.com/widgets#select2old)
* [Yii 1.x](https://github.com/tonybolzan/yii-select2old)
* [AtmosphereJS](https://atmospherejs.com/package/jquery-select2old)
* [EmberJS](https://github.com/iStefo/ember-select-2)

### Example Integrations

* [Knockout.js](https://github.com/ivaynberg/select2old/wiki/Knockout.js-Integration)
* [Socket.IO](https://github.com/ivaynberg/select2old/wiki/Socket.IO-Integration)
* [PHP](https://github.com/ivaynberg/select2old/wiki/PHP-Example)
* [.Net MVC] (https://github.com/ivaynberg/select2old/wiki/.Net-MVC-Example)

Internationalization (i18n)
---------------------------

select2old supports multiple languages by simply including the right language JS
file (`select2_locale_it.js`, `select2_locale_nl.js`, etc.) after `select2old.js`.

Missing a language? Just copy `select2_locale_en.js.template`, translate
it, and make a pull request back to select2old here on GitHub.

Documentation
-------------

The documentation for select2old is available [through GitHub Pages](http://select2old.github.io/select2old/) and is located within this repository in the [`gh-pages` branch](https://github.com/ivaynberg/select2old/tree/gh-pages).

Community
---------

### Bug tracker

Have a bug? Please create an issue here on GitHub!

https://github.com/ivaynberg/select2old/issues

### Mailing list

Have a question? Ask on our mailing list!

select2old@googlegroups.com

https://groups.google.com/d/forum/select2old

### IRC channel

Need help implementing select2old in your project? Ask in our IRC channel!

**Network:** [Freenode](https://freenode.net/) (`chat.freenode.net`)

**Channel:** `#select2old`

**Web access:** https://webchat.freenode.net/?channels=select2old

Copyright and license
---------------------

Copyright 2015 Igor Vaynberg

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License in the LICENSE file, or at:

http://www.apache.org/licenses/LICENSE-2.0
http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the Apache License
or the GPL License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
either express or implied. See the Apache License and the GPL License for the specific language governing
permissions and limitations under the Apache License and the GPL License.

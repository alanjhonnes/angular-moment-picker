angular.module("momentPicker").run(["$templateCache", function($templateCache) {$templateCache.put("momentPicker.html","<div ng-switch=\"view\" class=\"moment-picker\">\r\n    <div ng-switch-when=\"year\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th ng-click=\"prev(10)\">&lsaquo;</th>\r\n                <th colspan=\"5\" class=\"switch\">\r\n                    {{years[0]|moment:\'YYYY\'}} - {{years[years.length-1]|moment:\'YYYY\'}}\r\n                </th>\r\n                <th ng-click=\"next(10)\">&rsaquo;</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n                <td colspan=\"7\">\r\n          <span ng-class=\"{\'active\':isSameYear(year),\'now\':isNow(year), \'after\':isAfter(year),\'before\':isBefore(year)}\"\r\n                ng-repeat=\"year in years\"\r\n                ng-click=\"setDate(year)\">{{year|moment:\'YYYY\'}}</span>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div ng-switch-when=\"month\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th ng-click=\"prev()\">&lsaquo;</th>\r\n                <th colspan=\"5\" class=\"switch\" ng-click=\"setView(\'year\')\">{{moment|moment:\'MMMM YYYY\'}}</th>\r\n                <th ng-click=\"next()\">&rsaquo;</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n                <td colspan=\"7\">\r\n          <span ng-repeat=\"month in months\"\r\n                ng-class=\"{\'active\':isSameMonth(month),\'after\':isAfter(month),\'before\':isBefore(month),\'now\':isNow(month)}\"\r\n                ng-click=\"setDate(month)\"\r\n                  >{{month|moment:\'MMM\'}}\r\n          </span>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div ng-switch-when=\"date\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th ng-click=\"prev()\">&lsaquo;</th>\r\n                <th colspan=\"5\" class=\"switch\" ng-click=\"setView(\'month\')\">{{moment|moment:\'MMMM YYYY\'}}</th>\r\n                <th ng-click=\"next()\">&rsaquo;</th>\r\n            </tr>\r\n            <tr>\r\n                <th ng-repeat=\"day in weekdays\" style=\"overflow: hidden\">{{day|moment:\'ddd\'}}</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr ng-repeat=\"week in weeks\">\r\n                <td ng-repeat=\"day in week\">\r\n          <span\r\n                  ng-class=\"{\'now\':isNow(day),\'active\':isSameDay(day),\'disabled\':(day.month()!=moment.month()),\'after\':isAfter(day),\'before\':isBefore(day)}\"\r\n                  ng-click=\"setDate(day)\">{{day|moment:\'DD\'}}</span>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div ng-switch-when=\"hours\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th ng-click=\"prev()\">&lsaquo;</th>\r\n                <th colspan=\"5\" class=\"switch\" ng-click=\"setView(\'date\')\" ng-bind=\"moment|moment:\'DD MMMM YYYY\'\"></th>\r\n                <th ng-click=\"next()\">&rsaquo;</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n                <td colspan=\"7\">\r\n          <span ng-repeat=\"hour in hours\"\r\n                ng-class=\"{\'now\':isNow(hour),\'active\':isSameHour(hour), \'after\':isAfter(hour),\'before\':isBefore(hour)}\"\r\n                ng-click=\"setDate(hour)\">\r\n            {{hour|moment:\'HH:mm\'}}\r\n          </span>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div ng-switch-when=\"minutes\">\r\n        <table>\r\n            <thead>\r\n            <tr>\r\n                <th ng-click=\"prev()\">&lsaquo;</th>\r\n                <th colspan=\"5\" class=\"switch\" ng-click=\"setView(\'hours\')\" ng-bind=\"moment|moment:\'HH:mm - DD MMM YYYY\'\"></th>\r\n                <th ng-click=\"next()\">&rsaquo;</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n                <td colspan=\"7\">\r\n          <span ng-repeat=\"minute in minutes\"\r\n                ng-class=\"{active:isSameMinutes(minute),\'now\':isNow(minute), \'after\':isAfter(minute),\'before\':isBefore(minute)}\"\r\n                ng-click=\"setDate(minute)\"\r\n                ng-bind=\"minute|moment:\'HH:mm\'\"></span>\r\n                </td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n");}]);
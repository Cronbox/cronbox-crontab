(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'crontab-gen'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'crontab-gen'.");
    }root['crontab-gen'] = factory(typeof this['crontab-gen'] === 'undefined' ? {} : this['crontab-gen'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var equals = Kotlin.equals;
  var Exception = Kotlin.kotlin.Exception;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var toString = Kotlin.toString;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var throwCCE = Kotlin.throwCCE;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var ERROR_MESSAGE_ELEMENT;
  var MINUTES_AND_HOURS_INTERPRETATION_BLOCK;
  var DAY_OF_MONTH_INTERPRETATION_BLOCK;
  var MONTH_INTERPRETATION_BLOCK;
  var DAY_OF_THE_WEEK_INTERPRETATION_BLOCK;
  function bindControls$lambda(closure$input, closure$parser, closure$validator, closure$interpreter) {
    return function (it) {
      if (equals(it.key, 'Enter')) {
        try {
          console.info("cron expression '" + closure$input.value + "'");
          var cronExpression = closure$parser.getExpressionParts_61zpoe$(closure$input.value);
          if (cronExpression != null) {
            if (closure$validator.isValid_mc6o7u$(cronExpression)) {
              hideElement(ERROR_MESSAGE_ELEMENT);
              var interpretations = closure$interpreter.getInterpretation_mc6o7u$(cronExpression);
              updateElementText(MINUTES_AND_HOURS_INTERPRETATION_BLOCK, interpretations.hourAndMinutes);
              updateElementText(DAY_OF_MONTH_INTERPRETATION_BLOCK, interpretations.daysOfMonth);
              updateElementText(MONTH_INTERPRETATION_BLOCK, interpretations.month);
              updateElementText(DAY_OF_THE_WEEK_INTERPRETATION_BLOCK, interpretations.dayOfTheWeek);
            } else {
              showValidationError();
            }
          } else {
            showValidationError();
          }
        } catch (e) {
          if (Kotlin.isType(e, Exception)) {
            console.error(e.message, e);
            showValidationError();
          } else
            throw e;
        }
      }return Unit;
    };
  }
  function bindControls() {
    var input = getMainInput();
    var parser = new CronExpressionParser();
    var validator = new CronExpressionValidator();
    var interpreter = new CronExpressionInterpreter();
    input.onkeyup = bindControls$lambda(input, parser, validator, interpreter);
  }
  function showValidationError() {
    showElement(ERROR_MESSAGE_ELEMENT);
    updateElementText(MINUTES_AND_HOURS_INTERPRETATION_BLOCK, EMPTY_STRING);
    updateElementText(DAY_OF_MONTH_INTERPRETATION_BLOCK, EMPTY_STRING);
    updateElementText(MONTH_INTERPRETATION_BLOCK, EMPTY_STRING);
    updateElementText(DAY_OF_THE_WEEK_INTERPRETATION_BLOCK, EMPTY_STRING);
  }
  function main$lambda(it) {
    bindControls();
    return Unit;
  }
  function main(args) {
    console.log('CRON EXPRESSIONS GENERATOR');
    window.onload = main$lambda;
  }
  function CronExpression(minute, hour, daysOfMonth, month, dayOfTheWeek) {
    this.minute = minute;
    this.hour = hour;
    this.daysOfMonth = daysOfMonth;
    this.month = month;
    this.dayOfTheWeek = dayOfTheWeek;
  }
  CronExpression.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CronExpression',
    interfaces: []
  };
  CronExpression.prototype.component1 = function () {
    return this.minute;
  };
  CronExpression.prototype.component2 = function () {
    return this.hour;
  };
  CronExpression.prototype.component3 = function () {
    return this.daysOfMonth;
  };
  CronExpression.prototype.component4 = function () {
    return this.month;
  };
  CronExpression.prototype.component5 = function () {
    return this.dayOfTheWeek;
  };
  CronExpression.prototype.copy_x0a6t6$ = function (minute, hour, daysOfMonth, month, dayOfTheWeek) {
    return new CronExpression(minute === void 0 ? this.minute : minute, hour === void 0 ? this.hour : hour, daysOfMonth === void 0 ? this.daysOfMonth : daysOfMonth, month === void 0 ? this.month : month, dayOfTheWeek === void 0 ? this.dayOfTheWeek : dayOfTheWeek);
  };
  CronExpression.prototype.toString = function () {
    return 'CronExpression(minute=' + Kotlin.toString(this.minute) + (', hour=' + Kotlin.toString(this.hour)) + (', daysOfMonth=' + Kotlin.toString(this.daysOfMonth)) + (', month=' + Kotlin.toString(this.month)) + (', dayOfTheWeek=' + Kotlin.toString(this.dayOfTheWeek)) + ')';
  };
  CronExpression.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.minute) | 0;
    result = result * 31 + Kotlin.hashCode(this.hour) | 0;
    result = result * 31 + Kotlin.hashCode(this.daysOfMonth) | 0;
    result = result * 31 + Kotlin.hashCode(this.month) | 0;
    result = result * 31 + Kotlin.hashCode(this.dayOfTheWeek) | 0;
    return result;
  };
  CronExpression.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.minute, other.minute) && Kotlin.equals(this.hour, other.hour) && Kotlin.equals(this.daysOfMonth, other.daysOfMonth) && Kotlin.equals(this.month, other.month) && Kotlin.equals(this.dayOfTheWeek, other.dayOfTheWeek)))));
  };
  function CronExpressionInterpretations(hourAndMinutes, daysOfMonth, month, dayOfTheWeek) {
    this.hourAndMinutes = hourAndMinutes;
    this.daysOfMonth = daysOfMonth;
    this.month = month;
    this.dayOfTheWeek = dayOfTheWeek;
  }
  CronExpressionInterpretations.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CronExpressionInterpretations',
    interfaces: []
  };
  CronExpressionInterpretations.prototype.component1 = function () {
    return this.hourAndMinutes;
  };
  CronExpressionInterpretations.prototype.component2 = function () {
    return this.daysOfMonth;
  };
  CronExpressionInterpretations.prototype.component3 = function () {
    return this.month;
  };
  CronExpressionInterpretations.prototype.component4 = function () {
    return this.dayOfTheWeek;
  };
  CronExpressionInterpretations.prototype.copy_w74nik$ = function (hourAndMinutes, daysOfMonth, month, dayOfTheWeek) {
    return new CronExpressionInterpretations(hourAndMinutes === void 0 ? this.hourAndMinutes : hourAndMinutes, daysOfMonth === void 0 ? this.daysOfMonth : daysOfMonth, month === void 0 ? this.month : month, dayOfTheWeek === void 0 ? this.dayOfTheWeek : dayOfTheWeek);
  };
  CronExpressionInterpretations.prototype.toString = function () {
    return 'CronExpressionInterpretations(hourAndMinutes=' + Kotlin.toString(this.hourAndMinutes) + (', daysOfMonth=' + Kotlin.toString(this.daysOfMonth)) + (', month=' + Kotlin.toString(this.month)) + (', dayOfTheWeek=' + Kotlin.toString(this.dayOfTheWeek)) + ')';
  };
  CronExpressionInterpretations.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.hourAndMinutes) | 0;
    result = result * 31 + Kotlin.hashCode(this.daysOfMonth) | 0;
    result = result * 31 + Kotlin.hashCode(this.month) | 0;
    result = result * 31 + Kotlin.hashCode(this.dayOfTheWeek) | 0;
    return result;
  };
  CronExpressionInterpretations.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.hourAndMinutes, other.hourAndMinutes) && Kotlin.equals(this.daysOfMonth, other.daysOfMonth) && Kotlin.equals(this.month, other.month) && Kotlin.equals(this.dayOfTheWeek, other.dayOfTheWeek)))));
  };
  function CronPatterns() {
    CronPatterns_instance = this;
    this.EXPRESSION_PATTERN = '^([\\d\\-,0-9/\\*]+)\\s([\\d\\-,0-9/\\*]+)\\s([\\d\\-,0-9/\\*]+)\\s([\\d\\-,0-9/\\*]+)\\s([\\d\\-,0-9/\\*]+)$';
    this.NUMBER_PATTERN = '^(\\d+)$';
    this.NUMBER_RANGE_PATTERN = '^\\d+\\-\\d+$';
    this.NUMBER_RANGE_GROUPS_PATTERN = '^(\\d+)\\-(\\d+)$';
    this.TIME_INTERVAL_PATTERN = '^\\*\\/(\\d+)$';
    this.ANY_VALUE = '*';
  }
  CronPatterns.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CronPatterns',
    interfaces: []
  };
  var CronPatterns_instance = null;
  function CronPatterns_getInstance() {
    if (CronPatterns_instance === null) {
      new CronPatterns();
    }return CronPatterns_instance;
  }
  function CronValueRanges() {
    CronValueRanges_instance = this;
    this.TIME_MIN_VALUE = 0;
    this.MINUTE_MAX_VALUE = 59;
    this.HOUR_MAX_VALUE = 23;
    this.DAY_MIN_VALUE = 1;
    this.DAY_OF_MONTH_MAX_VALUE = 31;
    this.MONTH_MAX_VALUE = 12;
    this.DAY_OF_THE_WEEK_MAX_VALUE = 6;
  }
  CronValueRanges.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'CronValueRanges',
    interfaces: []
  };
  var CronValueRanges_instance = null;
  function CronValueRanges_getInstance() {
    if (CronValueRanges_instance === null) {
      new CronValueRanges();
    }return CronValueRanges_instance;
  }
  function CronExpressionInterpreter() {
  }
  CronExpressionInterpreter.prototype.getInterpretation_mc6o7u$ = function (expression) {
    return new CronExpressionInterpretations(this.getMinutesAndHourInterpretation_0(expression.minute, expression.hour), this.getDayOfMonthInterpretation_0(expression.daysOfMonth), this.getMonthInterpretation_0(expression.month), this.getDayOfTheWeekInterpretation_0(expression.dayOfTheWeek));
  };
  CronExpressionInterpreter.prototype.getMinutesAndHourInterpretation_0 = function (minutes, hour) {
    var tmp$;
    var numberPattern = new RegExp(CronPatterns_getInstance().NUMBER_PATTERN);
    if (equals(minutes, CronPatterns_getInstance().ANY_VALUE) && equals(hour, CronPatterns_getInstance().ANY_VALUE)) {
      tmp$ = '\u041A\u0430\u0436\u0434\u0443\u044E \u043C\u0438\u043D\u0443\u0442\u0443';
    } else if (numberPattern.test(minutes) && numberPattern.test(hour)) {
      tmp$ = '\u041A ' + this.timeValueWithPad_0(hour) + ':' + this.timeValueWithPad_0(minutes);
    } else if (equals(minutes, CronPatterns_getInstance().ANY_VALUE) && numberPattern.test(hour)) {
      tmp$ = '\u041A\u0430\u0436\u0434\u0443\u044E \u043C\u0438\u043D\u0443\u0442\u0443 \u0447\u0430\u0441\u0430 ' + hour;
    } else {
      var stringBuilder = StringBuilder_init();
      var minutesInterpretation = this.getMinutesInterpretation_0(minutes);
      console.log("minutes interpretation '" + minutesInterpretation + "'");
      var hourInterpretation = this.getHoursInterpretation_0(hour);
      console.log("hour interpretation '" + hourInterpretation + "'");
      stringBuilder.append_pdl1vj$(minutesInterpretation + ' ');
      stringBuilder.append_pdl1vj$(hourInterpretation);
      var interpretation = stringBuilder.toString();
      console.log("minute & hour interpretation '" + interpretation + "'");
      tmp$ = interpretation + ' ';
    }
    return tmp$;
  };
  function CronExpressionInterpreter$getMinutesInterpretation$lambda(closure$numberRangePattern, closure$result, closure$numberPattern, closure$numberIntervalPattern) {
    return function (subPattern) {
      console.log("sub pattern '" + subPattern + "'");
      var numberRangeMatch = closure$numberRangePattern.exec(subPattern);
      if (numberRangeMatch != null) {
        console.log('- match number range pattern');
        var $receiver = numberRangeMatch[1];
        var firstValue = $receiver != null ? $receiver : '';
        var $receiver_0 = numberRangeMatch[2];
        var secondValue = $receiver_0 != null ? $receiver_0 : '';
        closure$result.append_pdl1vj$('\u043A\u0430\u0436\u0434\u0443\u044E \u043C\u0438\u043D\u0443\u0442\u0443 \u0441 ' + firstValue + ' \u0434\u043E ' + secondValue);
      } else {
        var numberPatternMatch = closure$numberPattern.exec(subPattern);
        if (numberPatternMatch != null) {
          console.log('- match number pattern');
          if (closure$result.length === 0) {
            closure$result.append_pdl1vj$('\u041A \u043C\u0438\u043D\u0443\u0442\u0435 ' + toString(numberPatternMatch[1]));
          } else {
            closure$result.append_pdl1vj$(',' + toString(numberPatternMatch[1]));
          }
        } else {
          var numberIntervalPatternMatch = closure$numberIntervalPattern.exec(subPattern);
          if (numberIntervalPatternMatch != null) {
            console.log('- match number interval pattern');
            var intervalValue = numberIntervalPatternMatch[1];
            if (closure$result.length === 0) {
              closure$result.append_pdl1vj$('\u041A\u0430\u0436\u0434\u044B\u0435 ' + toString(intervalValue) + ' \u043C\u0438\u043D\u0443\u0442');
            } else {
              closure$result.append_pdl1vj$(', \u043A\u0430\u0436\u0434\u044B\u0435 ' + toString(intervalValue) + ' \u043C\u0438\u043D\u0443\u0442');
            }
          }}
      }
      return Unit;
    };
  }
  CronExpressionInterpreter.prototype.getMinutesInterpretation_0 = function (minutes) {
    var result = StringBuilder_init();
    var numberPattern = new RegExp(CronPatterns_getInstance().NUMBER_PATTERN);
    var numberRangePattern = new RegExp(CronPatterns_getInstance().NUMBER_RANGE_GROUPS_PATTERN);
    var numberIntervalPattern = new RegExp(CronPatterns_getInstance().TIME_INTERVAL_PATTERN);
    forEachItem(splitString(minutes, 44), CronExpressionInterpreter$getMinutesInterpretation$lambda(numberRangePattern, result, numberPattern, numberIntervalPattern));
    return result.toString();
  };
  function CronExpressionInterpreter$getHoursInterpretation$lambda(closure$numberRangePattern, closure$result, closure$numberPattern, closure$numberIntervalPattern) {
    return function (subPattern) {
      console.log("sub pattern '" + subPattern + "'");
      var numberRangeMatch = closure$numberRangePattern.exec(subPattern);
      if (numberRangeMatch != null) {
        console.log('- match number range pattern');
        var $receiver = numberRangeMatch[1];
        var firstValue = $receiver != null ? $receiver : '';
        var $receiver_0 = numberRangeMatch[2];
        var secondValue = $receiver_0 != null ? $receiver_0 : '';
        closure$result.append_pdl1vj$('\u0447\u0430\u0441\u0430 \u0441 ' + firstValue + ' \u043F\u043E ' + secondValue);
      } else {
        var numberPatternMatch = closure$numberPattern.exec(subPattern);
        if (numberPatternMatch != null) {
          console.log('- match number pattern');
          if (closure$result.length === 0) {
            closure$result.append_pdl1vj$('\u0447\u0430\u0441\u0430 ' + toString(numberPatternMatch[1]));
          } else {
            closure$result.append_pdl1vj$(', ' + toString(numberPatternMatch[1]));
          }
        } else {
          var numberIntervalPatternMatch = closure$numberIntervalPattern.exec(subPattern);
          if (numberIntervalPatternMatch != null) {
            console.log('- match number interval pattern');
            var intervalValue = numberIntervalPatternMatch[1];
            if (closure$result.length === 0) {
              closure$result.append_pdl1vj$('\u043A\u0430\u0436\u0434\u044B\u0435 ' + toString(intervalValue) + ' \u0447\u0430\u0441');
            } else {
              closure$result.append_pdl1vj$(', \u043A\u0430\u0436\u0434\u044B\u0435 ' + toString(intervalValue) + ' \u0447\u0430\u0441\u0430');
            }
          }}
      }
      return Unit;
    };
  }
  CronExpressionInterpreter.prototype.getHoursInterpretation_0 = function (hours) {
    var result = StringBuilder_init();
    var numberPattern = new RegExp(CronPatterns_getInstance().NUMBER_PATTERN);
    var numberRangePattern = new RegExp(CronPatterns_getInstance().NUMBER_RANGE_GROUPS_PATTERN);
    var numberIntervalPattern = new RegExp(CronPatterns_getInstance().TIME_INTERVAL_PATTERN);
    forEachItem(splitString(hours, 44), CronExpressionInterpreter$getHoursInterpretation$lambda(numberRangePattern, result, numberPattern, numberIntervalPattern));
    return result.toString();
  };
  function CronExpressionInterpreter$getDayOfMonthInterpretation$lambda(closure$numberRangePattern, closure$result, closure$numberPattern, closure$numberIntervalPattern) {
    return function (subPattern) {
      console.log("sub pattern '" + subPattern + "'");
      var numberRangeMatch = closure$numberRangePattern.exec(subPattern);
      if (numberRangeMatch != null) {
        console.log('- match number range pattern');
        var $receiver = numberRangeMatch[1];
        var firstValue = $receiver != null ? $receiver : '';
        var $receiver_0 = numberRangeMatch[2];
        var secondValue = $receiver_0 != null ? $receiver_0 : '';
        closure$result.append_pdl1vj$('\u0434\u0435\u043D\u044C \u043C\u0435\u0441\u044F\u0446\u0430 \u0441 ' + firstValue + ' \u043F\u043E ' + secondValue);
      } else {
        var numberPatternMatch = closure$numberPattern.exec(subPattern);
        if (numberPatternMatch != null) {
          console.log('- match number pattern');
          if (closure$result.length === 0) {
            closure$result.append_pdl1vj$('\u0434\u0435\u043D\u044C \u043C\u0435\u0441\u044F\u0446\u0430 ' + toString(numberPatternMatch[1]));
          } else {
            closure$result.append_pdl1vj$(',' + toString(numberPatternMatch[1]));
          }
        } else {
          var numberIntervalPatternMatch = closure$numberIntervalPattern.exec(subPattern);
          if (numberIntervalPatternMatch != null) {
            console.log('- match number interval pattern');
            var $receiver_1 = numberIntervalPatternMatch[1];
            var intervalValue = toInt($receiver_1 != null ? $receiver_1 : '');
            if (closure$result.length === 0) {
              if (intervalValue < 31) {
                closure$result.append_pdl1vj$('\u043A\u0430\u0436\u0434\u044B\u0439 ' + intervalValue + ' \u0434\u0435\u043D\u044C \u043C\u0435\u0441\u044F\u0446\u0430');
              } else {
                closure$result.append_pdl1vj$('\u043A\u0430\u0436\u0434\u044B\u0435 ' + intervalValue + ' \u0434\u043D\u0435\u0439');
              }
            } else {
              closure$result.append_pdl1vj$(', ' + intervalValue);
            }
          }}
      }
      return Unit;
    };
  }
  CronExpressionInterpreter.prototype.getDayOfMonthInterpretation_0 = function (dayOfMonth) {
    var result = StringBuilder_init();
    var numberPattern = new RegExp(CronPatterns_getInstance().NUMBER_PATTERN);
    var numberRangePattern = new RegExp(CronPatterns_getInstance().NUMBER_RANGE_GROUPS_PATTERN);
    var numberIntervalPattern = new RegExp(CronPatterns_getInstance().TIME_INTERVAL_PATTERN);
    forEachItem(splitString(dayOfMonth, 44), CronExpressionInterpreter$getDayOfMonthInterpretation$lambda(numberRangePattern, result, numberPattern, numberIntervalPattern));
    return result.toString();
  };
  function CronExpressionInterpreter$getDayOfTheWeekInterpretation$lambda(closure$numberRangePattern, this$CronExpressionInterpreter, closure$result, closure$numberPattern, closure$numberIntervalPattern) {
    return function (subPattern) {
      console.log("sub pattern '" + subPattern + "'");
      var numberRangeMatch = closure$numberRangePattern.exec(subPattern);
      if (numberRangeMatch != null) {
        console.log('- match number range pattern');
        var tmp$ = this$CronExpressionInterpreter;
        var $receiver = numberRangeMatch[1];
        var firstValue = tmp$.getDayOfTheWeekStartRangeForm_0(toInt($receiver != null ? $receiver : ''));
        var tmp$_0 = this$CronExpressionInterpreter;
        var $receiver_0 = numberRangeMatch[2];
        var secondValue = tmp$_0.getDayOfTheWeekEndRangeForm_0(toInt($receiver_0 != null ? $receiver_0 : ''));
        closure$result.append_pdl1vj$('\u0441 ' + firstValue + ' \u043F\u043E ' + secondValue);
      } else {
        var numberPatternMatch = closure$numberPattern.exec(subPattern);
        if (numberPatternMatch != null) {
          console.log('- match number pattern');
          var tmp$_1 = this$CronExpressionInterpreter;
          var $receiver_1 = numberPatternMatch[1];
          var weekDay = tmp$_1.getDayOfTheWeek_0(toInt($receiver_1 != null ? $receiver_1 : ''));
          if (closure$result.length === 0) {
            closure$result.append_pdl1vj$('\u0442\u043E\u043B\u044C\u043A\u043E \u0432 ' + weekDay);
          } else {
            closure$result.append_pdl1vj$(',' + weekDay);
          }
        } else {
          var numberIntervalPatternMatch = closure$numberIntervalPattern.exec(subPattern);
          if (numberIntervalPatternMatch != null) {
            console.log('- match number interval pattern');
            var $receiver_2 = numberIntervalPatternMatch[1];
            var interval = $receiver_2 != null ? $receiver_2 : '';
            if (closure$result.length === 0) {
              closure$result.append_pdl1vj$('\u043A\u0430\u0436\u0434\u044B\u0435 ' + interval + ' \u0434\u043D\u044F \u043D\u0435\u0434\u0435\u043B\u0438');
            } else {
              closure$result.append_pdl1vj$(',' + interval);
            }
          }}
      }
      return Unit;
    };
  }
  CronExpressionInterpreter.prototype.getDayOfTheWeekInterpretation_0 = function (dayOfTheWeek) {
    var result = StringBuilder_init();
    var numberPattern = new RegExp(CronPatterns_getInstance().NUMBER_PATTERN);
    var numberRangePattern = new RegExp(CronPatterns_getInstance().NUMBER_RANGE_GROUPS_PATTERN);
    var numberIntervalPattern = new RegExp(CronPatterns_getInstance().TIME_INTERVAL_PATTERN);
    forEachItem(splitString(dayOfTheWeek, 44), CronExpressionInterpreter$getDayOfTheWeekInterpretation$lambda(numberRangePattern, this, result, numberPattern, numberIntervalPattern));
    return result.toString();
  };
  function CronExpressionInterpreter$getMonthInterpretation$lambda(closure$numberRangePattern, closure$result, this$CronExpressionInterpreter, closure$numberPattern, closure$numberIntervalPattern) {
    return function (subPattern) {
      console.log("sub pattern '" + subPattern + "'");
      var numberRangeMatch = closure$numberRangePattern.exec(subPattern);
      if (numberRangeMatch != null) {
        console.log('- match number range pattern');
        var $receiver = numberRangeMatch[1];
        var firstValue = toInt($receiver != null ? $receiver : '');
        var $receiver_0 = numberRangeMatch[2];
        var secondValue = toInt($receiver_0 != null ? $receiver_0 : '');
        closure$result.append_pdl1vj$('\u0441 ' + this$CronExpressionInterpreter.getMonthStartRangeById_0(firstValue) + ' \u043F\u043E ' + this$CronExpressionInterpreter.getMonthEndRangeById_0(secondValue));
      } else {
        var numberPatternMatch = closure$numberPattern.exec(subPattern);
        if (numberPatternMatch != null) {
          console.log('- match number pattern');
          if (closure$result.length === 0) {
            var tmp$ = closure$result;
            var tmp$_0 = this$CronExpressionInterpreter;
            var $receiver_1 = numberPatternMatch[1];
            tmp$.append_pdl1vj$('\u0432 ' + tmp$_0.getMonthById_0(toInt($receiver_1 != null ? $receiver_1 : '')));
          } else {
            var tmp$_1 = closure$result;
            var tmp$_2 = this$CronExpressionInterpreter;
            var $receiver_2 = numberPatternMatch[1];
            tmp$_1.append_pdl1vj$(',' + tmp$_2.getMonthById_0(toInt($receiver_2 != null ? $receiver_2 : '')));
          }
        } else {
          var numberIntervalPatternMatch = closure$numberIntervalPattern.exec(subPattern);
          if (numberIntervalPatternMatch != null) {
            console.log('- match number interval pattern');
            var intervalValue = numberIntervalPatternMatch[1];
            if (closure$result.length === 0) {
              closure$result.append_pdl1vj$('\u043A\u0430\u0436\u0434\u044B\u0435 ' + toString(intervalValue) + ' \u043C\u0435\u0441\u044F\u0446\u0430');
            } else {
              closure$result.append_pdl1vj$(', ' + toString(intervalValue));
            }
          }}
      }
      return Unit;
    };
  }
  CronExpressionInterpreter.prototype.getMonthInterpretation_0 = function (month) {
    var result = StringBuilder_init();
    var numberPattern = new RegExp(CronPatterns_getInstance().NUMBER_PATTERN);
    var numberRangePattern = new RegExp(CronPatterns_getInstance().NUMBER_RANGE_GROUPS_PATTERN);
    var numberIntervalPattern = new RegExp(CronPatterns_getInstance().TIME_INTERVAL_PATTERN);
    forEachItem(splitString(month, 44), CronExpressionInterpreter$getMonthInterpretation$lambda(numberRangePattern, result, this, numberPattern, numberIntervalPattern));
    return result.toString();
  };
  CronExpressionInterpreter.prototype.getMonthById_0 = function (id) {
    switch (id) {
      case 1:
        return '\u042F\u043D\u0432\u0430\u0440\u0435';
      case 2:
        return '\u0424\u0435\u0432\u0440\u0430\u043B\u0435';
      case 3:
        return '\u041C\u0430\u0440\u0442\u0435';
      case 4:
        return '\u0410\u043F\u0440\u0435\u043B\u0435';
      case 5:
        return '\u041C\u0430\u0435';
      case 6:
        return '\u0418\u044E\u043D\u0435';
      case 7:
        return '\u0418\u044E\u043B\u0435';
      case 8:
        return '\u0410\u0432\u0433\u0443\u0441\u0442\u0435';
      case 9:
        return '\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u0435';
      case 10:
        return '\u041E\u043A\u0442\u044F\u0431\u0440\u0435';
      case 11:
        return '\u041D\u043E\u044F\u0431\u0440\u0435';
      case 12:
        return '\u0414\u0435\u043A\u0430\u0431\u0440\u0435';
      default:return '';
    }
  };
  CronExpressionInterpreter.prototype.getMonthStartRangeById_0 = function (id) {
    switch (id) {
      case 1:
        return '\u042F\u043D\u0432\u0430\u0440\u044F';
      case 2:
        return '\u0424\u0435\u0432\u0440\u0430\u043B\u044F';
      case 3:
        return '\u041C\u0430\u0440\u0442\u0430';
      case 4:
        return '\u0410\u043F\u0440\u0435\u043B\u044F';
      case 5:
        return '\u041C\u0430\u044F';
      case 6:
        return '\u0418\u044E\u043D\u044F';
      case 7:
        return '\u0418\u044E\u043B\u044F';
      case 8:
        return '\u0410\u0432\u0433\u0443\u0441\u0442\u0430';
      case 9:
        return '\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044F';
      case 10:
        return '\u041E\u043A\u0442\u044F\u0431\u0440\u044F';
      case 11:
        return '\u041D\u043E\u044F\u0431\u0440\u044F';
      case 12:
        return '\u0414\u0435\u043A\u0430\u0431\u0440\u044F';
      default:return '';
    }
  };
  CronExpressionInterpreter.prototype.getMonthEndRangeById_0 = function (id) {
    switch (id) {
      case 1:
        return '\u042F\u043D\u0432\u0430\u0440\u044C';
      case 2:
        return '\u0424\u0435\u0432\u0440\u0430\u043B\u044C';
      case 3:
        return '\u041C\u0430\u0440\u0442';
      case 4:
        return '\u0410\u043F\u0440\u0435\u043B\u044C';
      case 5:
        return '\u041C\u0430\u0439';
      case 6:
        return '\u0418\u044E\u043D\u044C';
      case 7:
        return '\u0418\u044E\u043B\u044C';
      case 8:
        return '\u0410\u0432\u0433\u0443\u0441\u0442';
      case 9:
        return '\u0421\u0435\u043D\u0442\u044F\u0431\u0440\u044C';
      case 10:
        return '\u041E\u043A\u0442\u044F\u0431\u0440\u044C';
      case 11:
        return '\u041D\u043E\u044F\u0431\u0440\u044C';
      case 12:
        return '\u0414\u0435\u043A\u0430\u0431\u0440\u044C';
      default:return '';
    }
  };
  CronExpressionInterpreter.prototype.getDayOfTheWeek_0 = function (id) {
    switch (id) {
      case 0:
        return '\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435';
      case 1:
        return '\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A';
      case 2:
        return '\u0412\u0442\u043E\u0440\u043D\u0438\u043A';
      case 3:
        return '\u0421\u0440\u0435\u0434\u0443';
      case 4:
        return '\u0427\u0435\u0442\u0432\u0435\u0440\u0433';
      case 5:
        return '\u041F\u044F\u0442\u043D\u0438\u0446\u0443';
      case 6:
        return '\u0421\u0443\u0431\u0431\u043E\u0442\u0443';
      default:return '';
    }
  };
  CronExpressionInterpreter.prototype.getDayOfTheWeekStartRangeForm_0 = function (id) {
    switch (id) {
      case 0:
        return '\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u044F';
      case 1:
        return '\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A\u0430';
      case 2:
        return '\u0412\u0442\u043E\u0440\u043D\u0438\u043A\u0430';
      case 3:
        return '\u0421\u0440\u0435\u0434\u044B';
      case 4:
        return '\u0427\u0435\u0442\u0432\u0435\u0440\u0433\u0430';
      case 5:
        return '\u041F\u044F\u0442\u043D\u0438\u0446\u044B';
      case 6:
        return '\u0421\u0443\u0431\u0431\u043E\u0442\u044B';
      default:return '';
    }
  };
  CronExpressionInterpreter.prototype.getDayOfTheWeekEndRangeForm_0 = function (id) {
    switch (id) {
      case 0:
        return '\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435';
      case 1:
        return '\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A';
      case 2:
        return '\u0412\u0442\u043E\u0440\u043D\u0438\u043A';
      case 3:
        return '\u0421\u0440\u0435\u0434\u0443';
      case 4:
        return '\u0427\u0435\u0442\u0432\u0435\u0440\u0433';
      case 5:
        return '\u041F\u044F\u0442\u043D\u0438\u0446\u0443';
      case 6:
        return '\u0421\u0443\u0431\u0431\u043E\u0442\u0443';
      default:return '';
    }
  };
  CronExpressionInterpreter.prototype.timeValueWithPad_0 = function (value) {
    if (value.length === 1) {
      return '0' + value;
    } else {
      return value;
    }
  };
  CronExpressionInterpreter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CronExpressionInterpreter',
    interfaces: []
  };
  function CronExpressionParser() {
  }
  CronExpressionParser.prototype.getExpressionParts_61zpoe$ = function (expression) {
    var result = null;
    var match = (new RegExp(CronPatterns_getInstance().EXPRESSION_PATTERN)).exec(expression);
    console.log(match);
    if (match != null) {
      var $receiver = match[1];
      var tmp$ = $receiver != null ? $receiver : '';
      var $receiver_0 = match[2];
      var tmp$_0 = $receiver_0 != null ? $receiver_0 : '';
      var $receiver_1 = match[3];
      var tmp$_1 = $receiver_1 != null ? $receiver_1 : '';
      var $receiver_2 = match[4];
      var tmp$_2 = $receiver_2 != null ? $receiver_2 : '';
      var $receiver_3 = match[5];
      result = new CronExpression(tmp$, tmp$_0, tmp$_1, tmp$_2, $receiver_3 != null ? $receiver_3 : '');
    } else {
      console.error('unsupported expression format');
    }
    return result;
  };
  CronExpressionParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CronExpressionParser',
    interfaces: []
  };
  function CronExpressionValidator() {
  }
  CronExpressionValidator.prototype.isValid_mc6o7u$ = function (expression) {
    var result = this.isTimeExpressionValid_0(expression.minute, 0, 59) && this.isTimeExpressionValid_0(expression.hour, 0, 23) && this.isTimeExpressionValid_0(expression.daysOfMonth, 1, 31) && this.isTimeExpressionValid_0(expression.month, 1, 12) && this.isTimeExpressionValid_0(expression.dayOfTheWeek, 0, 6);
    console.log('final validation result: ' + result);
    return result;
  };
  CronExpressionValidator.prototype.isTimeExpressionValid_0 = function (expression, valueMin, valueMax) {
    console.log("validate time expression '" + expression + "'");
    var result = true;
    var numberPattern = new RegExp(CronPatterns_getInstance().NUMBER_PATTERN);
    var numberRangePattern = new RegExp(CronPatterns_getInstance().NUMBER_RANGE_PATTERN);
    var timeIntervalPattern = new RegExp(CronPatterns_getInstance().TIME_INTERVAL_PATTERN);
    if (!equals(expression, CronPatterns_getInstance().ANY_VALUE)) {
      var subExpressions = splitString(expression, 44);
      for (var index = 0; index !== subExpressions.size; ++index) {
        var tmp$;
        var subExpression = subExpressions.get_za3lpa$(index);
        var isNumber = numberPattern.test(subExpression);
        var isNumberRange = numberRangePattern.test(subExpression);
        var isTimeInterval = timeIntervalPattern.test(subExpression);
        if (!isNumber && !isNumberRange && !isTimeInterval) {
          console.error("unsupported sub pattern '" + subExpression + "'");
          result = false;
        } else {
          if (isNumber) {
            tmp$ = toInt(subExpression);
            result = (valueMin <= tmp$ && tmp$ <= valueMax);
          }if (isNumberRange) {
            result = this.isNumberRangeValid_0(subExpression, valueMin, valueMax);
          }if (isTimeInterval) {
            result = this.isTimeIntervalValid_0(subExpression);
          }}
      }
    }console.log('validation result ' + result);
    return result;
  };
  CronExpressionValidator.prototype.isNumberRangeValid_0 = function (expression, minValue, maxValue) {
    var tmp$, tmp$_0;
    var result = false;
    var match = (new RegExp(CronPatterns_getInstance().NUMBER_RANGE_GROUPS_PATTERN)).exec(expression);
    if (match != null) {
      var firstNumber = (tmp$ = match[1]) != null ? toInt(tmp$) : null;
      var secondNumber = (tmp$_0 = match[2]) != null ? toInt(tmp$_0) : null;
      if (firstNumber != null && secondNumber != null) {
        if (firstNumber <= secondNumber && (minValue <= firstNumber && firstNumber <= maxValue) && (minValue <= secondNumber && secondNumber <= maxValue)) {
          result = true;
        }}}return result;
  };
  CronExpressionValidator.prototype.isTimeIntervalValid_0 = function (expression) {
    var tmp$;
    var result = false;
    var match = (new RegExp(CronPatterns_getInstance().TIME_INTERVAL_PATTERN)).exec(expression);
    if (match != null) {
      var value = (tmp$ = match[1]) != null ? toInt(tmp$) : null;
      if (value != null) {
        if (value > 0) {
          result = true;
        }}}return result;
  };
  CronExpressionValidator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CronExpressionValidator',
    interfaces: []
  };
  var EMPTY_STRING;
  function getMainInput() {
    var tmp$;
    return Kotlin.isType(tmp$ = document.getElementsByTagName('input')[0], HTMLInputElement) ? tmp$ : throwCCE();
  }
  function showElement(id) {
    var tmp$;
    var $receiver = Kotlin.isType(tmp$ = document.getElementById(id), HTMLElement) ? tmp$ : throwCCE();
    $receiver.classList.add('d-block');
    $receiver.classList.remove('d-none');
  }
  function hideElement(id) {
    var tmp$;
    var $receiver = Kotlin.isType(tmp$ = document.getElementById(id), HTMLElement) ? tmp$ : throwCCE();
    $receiver.classList.add('d-none');
    $receiver.classList.remove('d-block');
  }
  function updateElementText(elementId, text) {
    var tmp$;
    (Kotlin.isType(tmp$ = document.getElementById(elementId), HTMLElement) ? tmp$ : throwCCE()).textContent = text;
  }
  function forEachItem($receiver, body) {
    for (var index = 0; index !== $receiver.size; ++index) {
      body($receiver.get_za3lpa$(index));
    }
  }
  function splitString(source, separator) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var results = ArrayList_init();
    var stringBuilder = StringBuilder_init();
    tmp$ = get_indices(source);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var elementIndex = tmp$_0; elementIndex <= tmp$_1; elementIndex += tmp$_2) {
      var char = source.charCodeAt(elementIndex);
      if (char !== separator) {
        stringBuilder.append_s8itvh$(char);
      } else {
        results.add_11rb$(stringBuilder.toString());
        stringBuilder.clear();
      }
    }
    if (stringBuilder.length > 0) {
      results.add_11rb$(stringBuilder.toString());
    }return results;
  }
  Object.defineProperty(_, 'ERROR_MESSAGE_ELEMENT', {
    get: function () {
      return ERROR_MESSAGE_ELEMENT;
    }
  });
  Object.defineProperty(_, 'MINUTES_AND_HOURS_INTERPRETATION_BLOCK', {
    get: function () {
      return MINUTES_AND_HOURS_INTERPRETATION_BLOCK;
    }
  });
  Object.defineProperty(_, 'DAY_OF_MONTH_INTERPRETATION_BLOCK', {
    get: function () {
      return DAY_OF_MONTH_INTERPRETATION_BLOCK;
    }
  });
  Object.defineProperty(_, 'MONTH_INTERPRETATION_BLOCK', {
    get: function () {
      return MONTH_INTERPRETATION_BLOCK;
    }
  });
  Object.defineProperty(_, 'DAY_OF_THE_WEEK_INTERPRETATION_BLOCK', {
    get: function () {
      return DAY_OF_THE_WEEK_INTERPRETATION_BLOCK;
    }
  });
  _.bindControls = bindControls;
  _.showValidationError = showValidationError;
  _.main_kand9s$ = main;
  _.CronExpression = CronExpression;
  _.CronExpressionInterpretations = CronExpressionInterpretations;
  Object.defineProperty(_, 'CronPatterns', {
    get: CronPatterns_getInstance
  });
  Object.defineProperty(_, 'CronValueRanges', {
    get: CronValueRanges_getInstance
  });
  _.CronExpressionInterpreter = CronExpressionInterpreter;
  _.CronExpressionParser = CronExpressionParser;
  _.CronExpressionValidator = CronExpressionValidator;
  Object.defineProperty(_, 'EMPTY_STRING', {
    get: function () {
      return EMPTY_STRING;
    }
  });
  _.getMainInput = getMainInput;
  _.showElement_61zpoe$ = showElement;
  _.hideElement_61zpoe$ = hideElement;
  _.updateElementText_puj7f4$ = updateElementText;
  _.forEachItem_s34kkx$ = forEachItem;
  _.splitString_4wanh1$ = splitString;
  ERROR_MESSAGE_ELEMENT = 'validation-error';
  MINUTES_AND_HOURS_INTERPRETATION_BLOCK = 'minutes_and_hours_interpretation';
  DAY_OF_MONTH_INTERPRETATION_BLOCK = 'day_of_month_interpretation';
  MONTH_INTERPRETATION_BLOCK = 'month_interpretation';
  DAY_OF_THE_WEEK_INTERPRETATION_BLOCK = 'day_of_the_week_interpretation';
  EMPTY_STRING = '';
  main([]);
  Kotlin.defineModule('crontab-gen', _);
  return _;
}));

//# sourceMappingURL=crontab-gen.js.map

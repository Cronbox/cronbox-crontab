!function(e,t){if("function"==typeof define&&define.amd)define(["exports","kotlin"],t);else if("object"==typeof exports)t(module.exports,require("kotlin"));else{if("undefined"==typeof kotlin)throw new Error("Error loading module 'crontab-gen'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'crontab-gen'.");e["crontab-gen"]=t(void 0===this["crontab-gen"]?{}:this["crontab-gen"],kotlin)}}(this,function(e,u){"use strict";var l,p,h,c,d,_=u.equals,f=u.kotlin.Exception,E=u.kotlin.Unit,t=u.Kind.CLASS,n=u.Kind.OBJECT,m=u.kotlin.text.StringBuilder_init,g=u.toString,y=u.kotlin.text.toInt_pdl1vz$,r=u.throwCCE,T=u.kotlin.text.get_indices_gw00vp$,R=u.kotlin.collections.ArrayList_init_287e2$;function o(){var r,o,i,a,e=P(),t=new k,n=new I,s=new $;e.onkeyup=(r=e,o=t,i=n,a=s,function(e){if(_(e.key,"Enter"))try{console.info("cron expression '"+r.value+"'");var t,n=o.getExpressionParts_61zpoe$(r.value);null!=n&&i.isValid_mc6o7u$(n)?(S(l),t=a.getInterpretation_mc6o7u$(n),b(p,t.hourAndMinutes),b(h,t.daysOfMonth),b(c,t.month),b(d,t.dayOfTheWeek)):v()}catch(e){if(!u.isType(e,f))throw e;console.error(e.message,e),v()}return E})}function v(){w(l),b(p,A),b(h,A),b(c,A),b(d,A)}function i(e){return o(),E}function a(e){console.log("CRON EXPRESSIONS GENERATOR"),window.onload=i}function N(e,t,n,r,o){this.minute=e,this.hour=t,this.daysOfMonth=n,this.month=r,this.dayOfTheWeek=o}function s(e,t,n,r){this.hourAndMinutes=e,this.daysOfMonth=t,this.month=n,this.dayOfTheWeek=r}function x(){(M=this).EXPRESSION_PATTERN="^([\\d\\-,0-9/\\*]+)\\s([\\d\\-,0-9/\\*]+)\\s([\\d\\-,0-9/\\*]+)\\s([\\d\\-,0-9/\\*]+)\\s([\\d\\-,0-9/\\*]+)$",this.NUMBER_PATTERN="^(\\d+)$",this.NUMBER_RANGE_PATTERN="^\\d+\\-\\d+$",this.NUMBER_RANGE_GROUPS_PATTERN="^(\\d+)\\-(\\d+)$",this.TIME_INTERVAL_PATTERN="^\\*\\/(\\d+)$",this.ANY_VALUE="*"}N.$metadata$={kind:t,simpleName:"CronExpression",interfaces:[]},N.prototype.component1=function(){return this.minute},N.prototype.component2=function(){return this.hour},N.prototype.component3=function(){return this.daysOfMonth},N.prototype.component4=function(){return this.month},N.prototype.component5=function(){return this.dayOfTheWeek},N.prototype.copy_x0a6t6$=function(e,t,n,r,o){return new N(void 0===e?this.minute:e,void 0===t?this.hour:t,void 0===n?this.daysOfMonth:n,void 0===r?this.month:r,void 0===o?this.dayOfTheWeek:o)},N.prototype.toString=function(){return"CronExpression(minute="+u.toString(this.minute)+", hour="+u.toString(this.hour)+", daysOfMonth="+u.toString(this.daysOfMonth)+", month="+u.toString(this.month)+", dayOfTheWeek="+u.toString(this.dayOfTheWeek)+")"},N.prototype.hashCode=function(){var e=0;return e=31*(e=31*(e=31*(e=31*(e=31*e+u.hashCode(this.minute)|0)+u.hashCode(this.hour)|0)+u.hashCode(this.daysOfMonth)|0)+u.hashCode(this.month)|0)+u.hashCode(this.dayOfTheWeek)|0},N.prototype.equals=function(e){return this===e||null!==e&&"object"==typeof e&&Object.getPrototypeOf(this)===Object.getPrototypeOf(e)&&u.equals(this.minute,e.minute)&&u.equals(this.hour,e.hour)&&u.equals(this.daysOfMonth,e.daysOfMonth)&&u.equals(this.month,e.month)&&u.equals(this.dayOfTheWeek,e.dayOfTheWeek)},s.$metadata$={kind:t,simpleName:"CronExpressionInterpretations",interfaces:[]},s.prototype.component1=function(){return this.hourAndMinutes},s.prototype.component2=function(){return this.daysOfMonth},s.prototype.component3=function(){return this.month},s.prototype.component4=function(){return this.dayOfTheWeek},s.prototype.copy_w74nik$=function(e,t,n,r){return new s(void 0===e?this.hourAndMinutes:e,void 0===t?this.daysOfMonth:t,void 0===n?this.month:n,void 0===r?this.dayOfTheWeek:r)},s.prototype.toString=function(){return"CronExpressionInterpretations(hourAndMinutes="+u.toString(this.hourAndMinutes)+", daysOfMonth="+u.toString(this.daysOfMonth)+", month="+u.toString(this.month)+", dayOfTheWeek="+u.toString(this.dayOfTheWeek)+")"},s.prototype.hashCode=function(){var e=0;return e=31*(e=31*(e=31*(e=31*e+u.hashCode(this.hourAndMinutes)|0)+u.hashCode(this.daysOfMonth)|0)+u.hashCode(this.month)|0)+u.hashCode(this.dayOfTheWeek)|0},s.prototype.equals=function(e){return this===e||null!==e&&"object"==typeof e&&Object.getPrototypeOf(this)===Object.getPrototypeOf(e)&&u.equals(this.hourAndMinutes,e.hourAndMinutes)&&u.equals(this.daysOfMonth,e.daysOfMonth)&&u.equals(this.month,e.month)&&u.equals(this.dayOfTheWeek,e.dayOfTheWeek)},x.$metadata$={kind:n,simpleName:"CronPatterns",interfaces:[]};var M=null;function O(){return null===M&&new x,M}var A;function $(){}function k(){}function I(){}function P(){var e;return u.isType(e=document.getElementsByTagName("input")[0],HTMLInputElement)?e:r()}function w(e){var t,n=u.isType(t=document.getElementById(e),HTMLElement)?t:r();n.classList.add("d-block"),n.classList.remove("d-none")}function S(e){var t,n=u.isType(t=document.getElementById(e),HTMLElement)?t:r();n.classList.add("d-none"),n.classList.remove("d-block")}function b(e,t){var n;(u.isType(n=document.getElementById(e),HTMLElement)?n:r()).textContent=t}function j(e,t){for(var n=0;n!==e.size;++n)t(e.get_za3lpa$(n))}function C(e,t){for(var n=R(),r=m(),o=T(e),i=o.first,a=o.last,s=o.step,u=i;u<=a;u+=s){var l=e.charCodeAt(u);l!==t?r.append_s8itvh$(l):(n.add_11rb$(r.toString()),r.clear())}return 0<r.length&&n.add_11rb$(r.toString()),n}return $.prototype.getInterpretation_mc6o7u$=function(e){return new s(this.getMinutesAndHourInterpretation_0(e.minute,e.hour),this.getDayOfMonthInterpretation_0(e.daysOfMonth),this.getMonthInterpretation_0(e.month),this.getDayOfTheWeekInterpretation_0(e.dayOfTheWeek))},$.prototype.getMinutesAndHourInterpretation_0=function(e,t){var n,r,o,i,a=new RegExp(O().NUMBER_PATTERN),s=_(e,O().ANY_VALUE)&&_(t,O().ANY_VALUE)?"Каждую минуту":a.test(e)&&a.test(t)?"К "+this.timeValueWithPad_0(t)+":"+this.timeValueWithPad_0(e):_(e,O().ANY_VALUE)&&a.test(t)?"Каждую минуту часа "+t:(n=m(),r=this.getMinutesInterpretation_0(e),console.log("minutes interpretation '"+r+"'"),o=this.getHoursInterpretation_0(t),console.log("hour interpretation '"+o+"'"),n.append_pdl1vj$(r+" "),n.append_pdl1vj$(o),i=n.toString(),console.log("minute & hour interpretation '"+i+"'"),i+" ");return s},$.prototype.getMinutesInterpretation_0=function(e){var l,p,h,c,t=m(),n=new RegExp(O().NUMBER_PATTERN),r=new RegExp(O().NUMBER_RANGE_GROUPS_PATTERN),o=new RegExp(O().TIME_INTERVAL_PATTERN);return j(C(e,44),(l=r,p=t,h=n,c=o,function(e){console.log("sub pattern '"+e+"'");var t,n,r,o,i,a,s,u=l.exec(e);return null!=u?(console.log("- match number range pattern"),n=null!=(t=u[1])?t:"",o=null!=(r=u[2])?r:"",p.append_pdl1vj$("каждую минуту с "+n+" до "+o)):null!=(i=h.exec(e))?(console.log("- match number pattern"),0===p.length?p.append_pdl1vj$("К минуте "+g(i[1])):p.append_pdl1vj$(","+g(i[1]))):null!=(a=c.exec(e))&&(console.log("- match number interval pattern"),s=a[1],0===p.length?p.append_pdl1vj$("Каждые "+g(s)+" минут"):p.append_pdl1vj$(", каждые "+g(s)+" минут")),E})),t.toString()},$.prototype.getHoursInterpretation_0=function(e){var l,p,h,c,t=m(),n=new RegExp(O().NUMBER_PATTERN),r=new RegExp(O().NUMBER_RANGE_GROUPS_PATTERN),o=new RegExp(O().TIME_INTERVAL_PATTERN);return j(C(e,44),(l=r,p=t,h=n,c=o,function(e){console.log("sub pattern '"+e+"'");var t,n,r,o,i,a,s,u=l.exec(e);return null!=u?(console.log("- match number range pattern"),n=null!=(t=u[1])?t:"",o=null!=(r=u[2])?r:"",p.append_pdl1vj$("часа с "+n+" по "+o)):null!=(i=h.exec(e))?(console.log("- match number pattern"),0===p.length?p.append_pdl1vj$("часа "+g(i[1])):p.append_pdl1vj$(", "+g(i[1]))):null!=(a=c.exec(e))&&(console.log("- match number interval pattern"),s=a[1],0===p.length?p.append_pdl1vj$("каждые "+g(s)+" час"):p.append_pdl1vj$(", каждые "+g(s)+" часа")),E})),t.toString()},$.prototype.getDayOfMonthInterpretation_0=function(e){var p,h,c,d,t=m(),n=new RegExp(O().NUMBER_PATTERN),r=new RegExp(O().NUMBER_RANGE_GROUPS_PATTERN),o=new RegExp(O().TIME_INTERVAL_PATTERN);return j(C(e,44),(p=r,h=t,c=n,d=o,function(e){console.log("sub pattern '"+e+"'");var t,n,r,o,i,a,s,u,l=p.exec(e);return null!=l?(console.log("- match number range pattern"),n=null!=(t=l[1])?t:"",o=null!=(r=l[2])?r:"",h.append_pdl1vj$("день месяца с "+n+" по "+o)):null!=(i=c.exec(e))?(console.log("- match number pattern"),0===h.length?h.append_pdl1vj$("день месяца "+g(i[1])):h.append_pdl1vj$(","+g(i[1]))):null!=(a=d.exec(e))&&(console.log("- match number interval pattern"),s=a[1],u=y(null!=s?s:""),0===h.length?u<31?h.append_pdl1vj$("каждый "+u+" день месяца"):h.append_pdl1vj$("каждые "+u+" дней"):h.append_pdl1vj$(", "+u)),E})),t.toString()},$.prototype.getDayOfTheWeekInterpretation_0=function(e){var c,d,_,f,g,t=m(),n=new RegExp(O().NUMBER_PATTERN),r=new RegExp(O().NUMBER_RANGE_GROUPS_PATTERN),o=new RegExp(O().TIME_INTERVAL_PATTERN);return j(C(e,44),(c=r,d=this,_=t,f=n,g=o,function(e){console.log("sub pattern '"+e+"'");var t,n,r,o,i,a,s,u,l,p,h=c.exec(e);return null!=h?(console.log("- match number range pattern"),t=h[1],n=d.getDayOfTheWeekStartRangeForm_0(y(null!=t?t:"")),r=h[2],o=d.getDayOfTheWeekEndRangeForm_0(y(null!=r?r:"")),_.append_pdl1vj$("с "+n+" по "+o)):null!=(i=f.exec(e))?(console.log("- match number pattern"),a=i[1],s=d.getDayOfTheWeek_0(y(null!=a?a:"")),0===_.length?_.append_pdl1vj$("только в "+s):_.append_pdl1vj$(","+s)):null!=(u=g.exec(e))&&(console.log("- match number interval pattern"),p=null!=(l=u[1])?l:"",0===_.length?_.append_pdl1vj$("каждые "+p+" дня недели"):_.append_pdl1vj$(","+p)),E})),t.toString()},$.prototype.getMonthInterpretation_0=function(e){var h,c,d,_,f,t=m(),n=new RegExp(O().NUMBER_PATTERN),r=new RegExp(O().NUMBER_RANGE_GROUPS_PATTERN),o=new RegExp(O().TIME_INTERVAL_PATTERN);return j(C(e,44),(h=r,c=t,d=this,_=n,f=o,function(e){console.log("sub pattern '"+e+"'");var t,n,r,o,i,a,s,u,l,p=h.exec(e);return null!=p?(console.log("- match number range pattern"),t=p[1],n=y(null!=t?t:""),r=p[2],o=y(null!=r?r:""),c.append_pdl1vj$("с "+d.getMonthStartRangeById_0(n)+" по "+d.getMonthEndRangeById_0(o))):null!=(i=_.exec(e))?(console.log("- match number pattern"),0===c.length?(a=i[1],c.append_pdl1vj$("в "+d.getMonthById_0(y(null!=a?a:"")))):(s=i[1],c.append_pdl1vj$(","+d.getMonthById_0(y(null!=s?s:""))))):null!=(u=f.exec(e))&&(console.log("- match number interval pattern"),l=u[1],0===c.length?c.append_pdl1vj$("каждые "+g(l)+" месяца"):c.append_pdl1vj$(", "+g(l))),E})),t.toString()},$.prototype.getMonthById_0=function(e){switch(e){case 1:return"Январе";case 2:return"Феврале";case 3:return"Марте";case 4:return"Апреле";case 5:return"Мае";case 6:return"Июне";case 7:return"Июле";case 8:return"Августе";case 9:return"Сентябре";case 10:return"Октябре";case 11:return"Ноябре";case 12:return"Декабре";default:return""}},$.prototype.getMonthStartRangeById_0=function(e){switch(e){case 1:return"Января";case 2:return"Февраля";case 3:return"Марта";case 4:return"Апреля";case 5:return"Мая";case 6:return"Июня";case 7:return"Июля";case 8:return"Августа";case 9:return"Сентября";case 10:return"Октября";case 11:return"Ноября";case 12:return"Декабря";default:return""}},$.prototype.getMonthEndRangeById_0=function(e){switch(e){case 1:return"Январь";case 2:return"Февраль";case 3:return"Март";case 4:return"Апрель";case 5:return"Май";case 6:return"Июнь";case 7:return"Июль";case 8:return"Август";case 9:return"Сентябрь";case 10:return"Октябрь";case 11:return"Ноябрь";case 12:return"Декабрь";default:return""}},$.prototype.getDayOfTheWeek_0=function(e){switch(e){case 0:return"Воскресенье";case 1:return"Понедельник";case 2:return"Вторник";case 3:return"Среду";case 4:return"Четверг";case 5:return"Пятницу";case 6:return"Субботу";default:return""}},$.prototype.getDayOfTheWeekStartRangeForm_0=function(e){switch(e){case 0:return"Воскресенья";case 1:return"Понедельника";case 2:return"Вторника";case 3:return"Среды";case 4:return"Четверга";case 5:return"Пятницы";case 6:return"Субботы";default:return""}},$.prototype.getDayOfTheWeekEndRangeForm_0=function(e){switch(e){case 0:return"Воскресенье";case 1:return"Понедельник";case 2:return"Вторник";case 3:return"Среду";case 4:return"Четверг";case 5:return"Пятницу";case 6:return"Субботу";default:return""}},$.prototype.timeValueWithPad_0=function(e){return 1===e.length?"0"+e:e},$.$metadata$={kind:t,simpleName:"CronExpressionInterpreter",interfaces:[]},k.prototype.getExpressionParts_61zpoe$=function(e){var t,n,r,o,i,a=null,s=new RegExp(O().EXPRESSION_PATTERN).exec(e);return console.log(s),null!=s?a=new N(null!=(t=s[1])?t:"",null!=(n=s[2])?n:"",null!=(r=s[3])?r:"",null!=(o=s[4])?o:"",null!=(i=s[5])?i:""):console.error("unsupported expression format"),a},k.$metadata$={kind:t,simpleName:"CronExpressionParser",interfaces:[]},I.prototype.isValid_mc6o7u$=function(e){var t=this.isTimeExpressionValid_0(e.minute,0,59)&&this.isTimeExpressionValid_0(e.hour,0,23)&&this.isTimeExpressionValid_0(e.daysOfMonth,1,31)&&this.isTimeExpressionValid_0(e.month,1,12)&&this.isTimeExpressionValid_0(e.dayOfTheWeek,0,6);return console.log("final validation result: "+t),t},I.prototype.isTimeExpressionValid_0=function(e,t,n){console.log("validate time expression '"+e+"'");var r=!0,o=new RegExp(O().NUMBER_PATTERN),i=new RegExp(O().NUMBER_RANGE_PATTERN),a=new RegExp(O().TIME_INTERVAL_PATTERN);if(!_(e,O().ANY_VALUE))for(var s=C(e,44),u=0;u!==s.size;++u){var l,p=s.get_za3lpa$(u),h=o.test(p),c=i.test(p),d=a.test(p);h||c||d?(h&&(r=t<=(l=y(p))&&l<=n),c&&(r=this.isNumberRangeValid_0(p,t,n)),d&&(r=this.isTimeIntervalValid_0(p))):(console.error("unsupported sub pattern '"+p+"'"),r=!1)}return console.log("validation result "+r),r},I.prototype.isNumberRangeValid_0=function(e,t,n){var r,o,i,a,s=!1,u=new RegExp(O().NUMBER_RANGE_GROUPS_PATTERN).exec(e);return null!=u&&(i=null!=(r=u[1])?y(r):null,a=null!=(o=u[2])?y(o):null,null!=i&&null!=a&&i<=a&&t<=i&&i<=n&&t<=a&&a<=n&&(s=!0)),s},I.prototype.isTimeIntervalValid_0=function(e){var t,n,r=!1,o=new RegExp(O().TIME_INTERVAL_PATTERN).exec(e);return null==o||null!=(n=null!=(t=o[1])?y(t):null)&&0<n&&(r=!0),r},I.$metadata$={kind:t,simpleName:"CronExpressionValidator",interfaces:[]},e.bindControls=o,e.showValidationError=v,e.main_kand9s$=a,e.CronExpression=N,e.CronExpressionInterpretations=s,Object.defineProperty(e,"CronPatterns",{get:O}),e.CronExpressionInterpreter=$,e.CronExpressionParser=k,e.CronExpressionValidator=I,e.getMainInput=P,e.showElement_61zpoe$=w,e.hideElement_61zpoe$=S,e.updateElementText_puj7f4$=b,e.forEachItem_s34kkx$=j,e.splitString_4wanh1$=C,l="validation-error",p="minutes_and_hours_interpretation",h="day_of_month_interpretation",c="month_interpretation",d="day_of_the_week_interpretation",A="",a(),e});
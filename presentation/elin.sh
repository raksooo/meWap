access_token=""

curl 'http://mewap.se/webresources/events' -H 'Content-Type: application/json;charset=UTF-8' -H 'Accept: application/json, text/plain, */*' -H "Cookie: access_token=$access_token" -d '{"name":"Workshop","description":"We really need to do this!","duration":7200000,"deadline":"1414969200000","deadlineReminder":false,"notification":"NO_NOTIFICATION","dates":["1415174400000","1415275200000","1415370600000","1415703600000","1415802600000","1415865600000"],"participators":["elin.nyberg@gmail.com"],"allDayEvent":false}'

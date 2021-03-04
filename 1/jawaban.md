# Jawaban Nomor 1

```
SELECT `USER`.ID, `USER`.UserName, `P`.`UserName` AS `ParentUserName`
FROM `USER`LEFT JOIN `USER` AS `P`
ON `USER`.`Parent` = `P`.`ID` ORDER BY `USER`.`ID`
```

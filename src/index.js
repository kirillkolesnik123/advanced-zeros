module.exports = function getZerosCount(number, base) {
   var times;
    var sum_of_zer = number;
    for (var i = 2; i <= base;i++){
      if (base % i == 0){ //ищем кратную цифру
        times = 0;
        while (base % i == 0){
          times++;// количество кратных проходов
          base = Math.floor(base / i);
        }
        var zer_count = 0;
        sub_number = number;

        while (Math.floor(sub_number / i) > 0){// делим число и записываем в сумму частных в zer_count
          zer_count += Math.floor(sub_number / i);
          sub_number = Math.floor(sub_number / i);
        }
        sum_of_zer = Math.min (sum_of_zer , Math.floor(zer_count / times)); // меньшее из данного прохода и предыдушего 'i'
      }
    }
    return sum_of_zer;
  
}
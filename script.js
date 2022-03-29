function defective (car , spoiled) {
    
    let answer = ''
    
    car = +prompt(' Количество машин?')
    
    spoiled = +prompt(' Бракованных ?')

    answer = spoiled * 100 / car
    
    return answer

}
alert((defective() + '%' + 'Бракованных'));
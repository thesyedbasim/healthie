function prescriptionModelToTimeModel(prescriptionModel: string) {
  const prescriptionModelArray = prescriptionModel.split('-');

  if (prescriptionModelArray[0] !== '0')
    prescriptionModelArray[0] = JSON.parse(
      localStorage.getItem('mealTimings') || ''
    ).breakfastTime;
  if (prescriptionModelArray[1] !== '0')
    prescriptionModelArray[1] = JSON.parse(
      localStorage.getItem('mealTimings') || ''
    ).lunchTime;
  if (prescriptionModelArray[2] !== '0')
    prescriptionModelArray[2] = JSON.parse(
      localStorage.getItem('mealTimings') || ''
    ).dinnerTime;

  return prescriptionModelArray;
}

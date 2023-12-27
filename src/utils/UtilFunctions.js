export const AgeCalc = () => {
    let currDate = new Date();
    return currDate.getFullYear() - 1998;
};
export const WorkexCalc = () => {
    let d1 = new Date("2021-07-19");
    let d2 = new Date();
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return Math.round((months / 12) * 10) / 10;
};
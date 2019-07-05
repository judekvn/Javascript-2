const hof = (fname, lname, cbf) => {
    setTimeout(() => {

        console.log(fname);
        console.log(lname);
        return cbf(fname, lname);
    }, 2000)
}
const callBack = (fname, lname) => {
    console.log( `${fname} ${lname}`)}


hof('Jude Edward', 'Kevin', callBack )

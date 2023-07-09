const nickname= "Timmy";
const firstname = "Timothy";
const logname = nickname || firstname

if (logname) {
    console.log (`Good Morning, ${logname}!`)
} else {
    console.log(`Good Morning!`)
}
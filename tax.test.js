
let tax=require(`./tax_calculator`);
test(`for 2500000 tax is 735000`,()=>{
    expect(tax(2500000)).toBe(735000)
})
test(`for 500000 tax is 135000`,()=>{
    expect(tax(500000)).toBe(135000)
})
test(`for 1000000 tax is 285000`,()=>{
    expect(tax(1000000)).toBe(285000)
})
test(`for 800000 tax is 112000`,()=>{
    expect(tax(800000)).toBe(112000)
})
test(`for 11800000 tax is 3525000`,()=>{
    expect(tax(11800000)).toBe(3525000)
})
test(`for 1500000 tax is 435000`,()=>{
    expect(tax(1500000)).toBe(435000)
})
test(`for 300000 tax is 15000`,()=>{
    expect(tax(300000)).toBe(15000)
})
test(`for 200000 tax is none`,()=>{
    expect(tax(200000)).toBe(`No tax`)
})
test(`for 2500000 tax is 735000`,()=>{
    expect(tax(2500000)).toBe(735000)
})

let check=require(`./passwordCheck`)
test("pratham123 = special char and capital letter missing",()=>{
    expect(check("pratham123")).toBe(`Special Character and Capital letter Missing`)
}) 
test("Pratham123 = special char missing",()=>{
    expect(check("Pratham123")).toBe(`Special Character Missing`)
}) 
test("@ratham123 = capital char missing",()=>{
    expect(check("@ratham123")).toEqual(`Capital letter Missing`)
})
test("ratham = Number, Special Character and Capital letter Missing",()=>{
    expect(check("ratham")).toEqual(`Number, Special Character and Capital letter Missing`)
})
test("r#tham = Capital letter and Number Missing",()=>{
    expect(check("r#tham")).toEqual(`Capital letter and Number Missing`)
})
test("Pr#tham = Number Missing",()=>{
    expect(check("Pr#tham")).toEqual(`Number Missing`)
})
test("Prtham = Special Character and Number Missing",()=>{
    expect(check("Prtham")).toEqual(`Special Character and Number Missing`)
})
test("Pratham = Special Character and Number Missing",()=>{
    expect(check("Prtham")).toEqual(`Special Character and Number Missing`)
})
test("Pratham245@ = correct password",()=>{
    expect(check("Pratham245@")).toEqual(`correct password`)
})

test("pratham = everything missing special char ,number,capital",()=>{
    expect(check("paratham")).toEqual(`Number, Special Character and Capital letter Missing`)
})
test("Pratham = Special Character and Number Missing",()=>{
    expect(check("Paratham")).toEqual(`Special Character and Number Missing`)
})
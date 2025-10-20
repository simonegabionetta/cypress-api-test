describe('FakeRestAPI - Users', () => {

    const baseUrl = 'https://fakerestapi.azurewebsites.net'

    it('Criar um usuário', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/api/v1/Users`,
            body: {
                "id": 1,
                "userName": "Mentoria",
                "password": "12345"
            }

        }).then((response) => {
            cy.log(`Status:` + response.status)//antes de add asserção
            //jsonpath
            cy.log(`Username:` + response.body.userName)

            //assert
            expect(response.status).to.eq(200)
            expect(response.body.userName).to.eq("Mentoria")

        })

    })
    it('Obter um usuário', () => {
        cy.request(`${baseUrl}/api/v1/Users/1`) //get permite direto
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.id).to.eq(1)
                expect(response.body.userName).to.eq(`User 1`)
        })
        

    })




}) 
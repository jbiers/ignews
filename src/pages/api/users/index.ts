import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        { id: 1, name: 'Julia' },
        { id: 2, name: 'Matheus' },
        { id: 3, name: 'Thiago' }
    ]

    return response.json(users)
}
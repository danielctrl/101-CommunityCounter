export default function handler(req, res){
    // const body = req.body

    console.log('/user')

    res.status(200).json({ user: { isLoggedIn: `true` } })
}

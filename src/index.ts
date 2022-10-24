import app from './app'
import './database/database'

const main = () =>{
    const port = process.env.PORT || app.get('port')
    app.listen(port);
    console.log(`🚀 listening on ${port}`)
}

main();



import app from './app'
import './database/database'

const main = () =>{
    app.listen(process.env.PORT || app.get('port'));
    console.log(`listening on ${app.get('port')}`)
}

main();



const {graphql,buildSchema} = require("graphql");

const schema = buildSchema(`type Query{hello:String}`);

const root = {hello:()=>'Hello world!'};

graphql(schema,`{hello}`,root).then((res)=>{
          console.log(res.data.hello);
});
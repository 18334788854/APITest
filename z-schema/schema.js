module.exports = {
          type:"object",
          properties:{
                    a:{
                              type:"string",
                              minLength:5
                    },
                    b:{
                              type:"number",
                              maxitems:100
                    }
          },
          required:["a","b"]
};
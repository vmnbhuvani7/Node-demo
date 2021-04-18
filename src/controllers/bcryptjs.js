const bcryptjs = require("bcryptjs");

const securePassword = async (password) => {
    console.log(password);
    
    const passwordHash = await bcryptjs.hash(password, 10)
    console.log("passwordHash", passwordHash);

    const passwordHashCompare = await bcryptjs.compare(password, passwordHash)
    console.log("passwordHashCompare", passwordHashCompare);
}

securePassword("test@123")
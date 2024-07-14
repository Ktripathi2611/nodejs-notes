// // Basic Error Handling
// function riskyError() {
//     throw new Error("Something went wrong");
// }

// try {
//     let result = riskyError();
//     console.log(result);
// } catch (error) {
//     console.log("Error: ", error);
// } finally {
//     console.log("Execution Complete");
// }

// Custom Error Handling
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function anotherError() {
    throw new CustomError("This is a Custom Error");
}

try {
    let result2 = anotherError();
    console.log(result2);
} catch (error) {
    console.log("Caught a custom error,", error.message);
} finally {
    console.log("Execution Completed");
}
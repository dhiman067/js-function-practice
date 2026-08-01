// একটি কোডিং একাডেমি নতুন শিক্ষার্থীদের var, let, const এর পার্থক্য বোঝাতে একটি ছোট Quiz Tool বানাচ্ছে। Tool-টি একটি keyword ইনপুট নেবে এবং সেই keyword দিয়ে Redeclare ও Reassign করা যায় কিনা তা বর্ণনা করবে।  

function describeDeclaration(string){
    if(string === "var"){
        return `Can redeclare, can reassign`
    }
    else if( string === "let"){
        return `Cannot redeclare, can reassign`

    }
    else if(string === "const"){
        return `Cannot redeclare, cannot reassign`
    }
    else{
        return `Invalid`
    }
}
console.log(describeDeclaration("let"));
console.log(describeDeclaration("const"));
console.log(describeDeclaration("var"));
console.log(describeDeclaration("int"));


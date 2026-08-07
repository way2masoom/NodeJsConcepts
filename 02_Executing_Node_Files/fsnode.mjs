import { readFile, writeFile } from 'fs/promises'
import { resolve } from "path"

async function readHtmlFile() {
    const path = resolve('./index.html');
    let file = await readFile(path)

    const data = {
        name: "MD Masoom Alam",
        company: "Dynamic"
    }

    for (const [key, value] of Object.entries(data)) {
        file = file.toString()
            .replace(`{{${key}}}`, value)
    }

    await writeFile(resolve('./output.html'), file)

    console.log(file.toString())
}

readHtmlFile()
import fs from 'node:fs'
import path from 'node:path'

const dataFolder = path.join(__dirname, '../data')

export function generateJson(obj: object, jsonName: string) {
  const file = path.join(dataFolder, `${jsonName}.json`)
  
  fs.writeFile(file, JSON.stringify(obj, null, 2), (err) => {
    if (err) throw err;
    console.log(`Arquivo ${jsonName} gerado com sucesso!`)
  })
}

interface ReadJson {
  vounchers: {
    id: number,
    nome: string,
    descricao: string,
    codigo: string,
    foiComprado: boolean,
    pontos: number
  }[]
}

export function readJson(jsonName: string): ReadJson{
  const file = path.join(dataFolder, `${jsonName}.json`)
  console.log(file)
  
  try {
    const data = fs.readFileSync(file, 'utf8')
    const dataJson = JSON.parse(data)
    console.log(dataJson);
    return dataJson
    

  } catch (error) {
    throw new Error(error)
  }  
}

export function updateJson(jsonName: string, newData: object){
  const file = path.join(dataFolder, `${jsonName}.json`)
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo JSON:', err);
        return;
    }
    const updatedJsonData = JSON.stringify(newData, null, 2);

    fs.writeFile(file, updatedJsonData, (err) => {
        if (err) {
            console.error('Erro ao atualizar o arquivo JSON:', err);
        } else {
            console.log('Arquivo JSON atualizado com sucesso!');
        }
    });
});

}
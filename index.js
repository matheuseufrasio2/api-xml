const express = require('express');
const multer = require('multer');
const admZip = require('adm-zip');
const cors = require('cors');
const xml2js = require('xml2js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/merge', upload.fields([
  { name: 'file1' },
  { name: 'file2' },
  { name: 'file3' },
]), async (req, res) => {
  const files = Object.values(req.files);
  const fileZips = files.map((file) => new admZip(file[0].buffer));
  const mergedZip = new admZip();

  const fileNames = fileZips.reduce((acc, fileZip) => {
    return [...acc, ...fileZip.getEntries().map((entry) => entry.entryName)];
  }, []);
  const uniqueFileNames = [...new Set(fileNames)];

  // Handle the files here
  uniqueFileNames.forEach((fileName) => {
    const fileContents = fileZips.reduce((acc, fileZip) => {
      const fileEntry = fileZip.getEntry(fileName);
      return fileEntry ? [...acc, fileEntry.getData()] : acc;
    }, []);
    let modifiedXmlBufferCargo;
    let modifiedXmlBufferClasseNivelFaixa;
    let modifiedXmlBufferCodigoVantagemDesconto;
    let modifiedXmlBufferDependente;
    let modifiedXmlBufferFolhaPagamento;
    let modifiedXmlBufferHistoricoFuncional;
    let modifiedXmlBufferLotacao;
    let modifiedXmlBufferServidor;
    let modifiedXmlBufferVantagemDesconto;
    let modifiedXmlBufferVinculo;
    if (fileName === 'Cargo.xml') {
      let itemsCargo = [];
      let newCargoXML = null;
      fileContents.forEach(fileContent => {
        const cargoXmlString = fileContent.toString('utf8')
        
        xml2js.parseString(cargoXmlString, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          if (!newCargoXML) {
            newCargoXML = result;
          }
          result.Cargo.ItemCargo.forEach(item => {
            itemsCargo.push(item)
          })
        });
      })
      newCargoXML.Cargo.ItemCargo = itemsCargo;
      
      const builder = new xml2js.Builder();
      const modifiedXmlString = builder.buildObject(newCargoXML);
      modifiedXmlBufferCargo = Buffer.from(modifiedXmlString, 'utf8');
    }
    if (fileName === 'ClasseNivelFaixa.xml') {
      let itemsClasseNivelFaixa = [];
      let newClasseNivelFaixa = null;
      fileContents.forEach(fileContent => {
        const cargoXmlString = fileContent.toString('utf8')
        
        xml2js.parseString(cargoXmlString, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          if (!newClasseNivelFaixa) {
            newClasseNivelFaixa = result;
          }
          result.ClasseNivelFaixa.ItemClasseNivelFaixa.forEach(item => {
            itemsClasseNivelFaixa.push(item)
          })
        });
      })
      newClasseNivelFaixa.ClasseNivelFaixa.ItemClasseNivelFaixa = itemsClasseNivelFaixa;
      
      const builder = new xml2js.Builder();
      const modifiedXmlString = builder.buildObject(newClasseNivelFaixa);
      modifiedXmlBufferClasseNivelFaixa = Buffer.from(modifiedXmlString, 'utf8');
    }
    if (fileName === 'CodigoVantagemDesconto.xml') {
      let itemsCodigoVantagemDesconto = [];
      let newCodigoVantagemDesconto = null;
      fileContents.forEach(fileContent => {
        const cargoXmlString = fileContent.toString('utf8')
        
        xml2js.parseString(cargoXmlString, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          if (!newCodigoVantagemDesconto) {
            newCodigoVantagemDesconto = result;
          }
          result.CodigoVantagemDesconto.ItemCodigoVantagemDesconto.forEach(item => {
            itemsCodigoVantagemDesconto.push(item)
          })
        });
      })
      newCodigoVantagemDesconto.CodigoVantagemDesconto.ItemCodigoVantagemDesconto = itemsCodigoVantagemDesconto;
      
      const builder = new xml2js.Builder();
      const modifiedXmlString = builder.buildObject(newCodigoVantagemDesconto);
      modifiedXmlBufferCodigoVantagemDesconto = Buffer.from(modifiedXmlString, 'utf8');
    }
    if (fileName === 'Dependente.xml') {
      let itemsDependente = [];
      let newDependente = null;
      fileContents.forEach(fileContent => {
        const cargoXmlString = fileContent.toString('utf8')
        
        xml2js.parseString(cargoXmlString, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          if (!newDependente) {
            newDependente = result;
          }
          result.Dependente.ItemDependente.forEach(item => {
            itemsDependente.push(item)
          })
        });
      })
      newDependente.Dependente.ItemDependente = itemsDependente;
      
      const builder = new xml2js.Builder();
      const modifiedXmlString = builder.buildObject(newDependente);
      modifiedXmlBufferDependente = Buffer.from(modifiedXmlString, 'utf8');
    }
    if (fileName === 'FolhaPagamento.xml') {
      let itemsFolhaPagamento = [];
      let newFolhaPagamento = null;
      fileContents.forEach(fileContent => {
        const cargoXmlString = fileContent.toString('utf8')
        
        xml2js.parseString(cargoXmlString, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          if (!newFolhaPagamento) {
            newFolhaPagamento = result;
          }
          result.FolhaPagamento.ItemFolha.forEach(item => {
            itemsFolhaPagamento.push(item)
          })
        });
      })
      newFolhaPagamento.FolhaPagamento.ItemFolha = itemsFolhaPagamento;
      
      const builder = new xml2js.Builder();
      const modifiedXmlString = builder.buildObject(newFolhaPagamento);
      modifiedXmlBufferFolhaPagamento = Buffer.from(modifiedXmlString, 'utf8');
    }
    if (fileName === 'HistoricoFuncional.xml') {
      let itemsHistoricoFuncional = [];
      let newHistoricoFuncional = null;
      fileContents.forEach(fileContent => {
        const cargoXmlString = fileContent.toString('utf8')
        
        xml2js.parseString(cargoXmlString, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          if (!newHistoricoFuncional) {
            newHistoricoFuncional = result;
          }
          result.HistoricoFuncional.ItemHistoricoFuncional.forEach(item => {
            itemsHistoricoFuncional.push(item)
          })
        });
      })
      newHistoricoFuncional.HistoricoFuncional.ItemHistoricoFuncional = itemsHistoricoFuncional;
      
      const builder = new xml2js.Builder();
      const modifiedXmlString = builder.buildObject(newHistoricoFuncional);
      modifiedXmlBufferHistoricoFuncional = Buffer.from(modifiedXmlString, 'utf8');
    }
    if (fileName === 'Lotacao.xml') {
      let itemsLotacao = [];
      let newLotacao = null;
      fileContents.forEach(fileContent => {
        const cargoXmlString = fileContent.toString('utf8')
        
        xml2js.parseString(cargoXmlString, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          if (!newLotacao) {
            newLotacao = result;
          }
          result.Lotacao.ItemLotacao.forEach(item => {
            itemsLotacao.push(item)
          })
        });
      })
      newLotacao.Lotacao.ItemLotacao = itemsLotacao;
      
      const builder = new xml2js.Builder();
      const modifiedXmlString = builder.buildObject(newLotacao);
      modifiedXmlBufferLotacao = Buffer.from(modifiedXmlString, 'utf8');
    }
    if (fileName === 'Servidor.xml') {
      let itemsServidor = [];
      let newServidor = null;
      fileContents.forEach(fileContent => {
        const cargoXmlString = fileContent.toString('utf8')
        
        xml2js.parseString(cargoXmlString, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          if (!newServidor) {
            newServidor = result;
          }
          result.Servidor.ItemServidor.forEach(item => {
            itemsServidor.push(item)
          })
        });
      })
      newServidor.Servidor.ItemServidor = itemsServidor;
      
      const builder = new xml2js.Builder();
      const modifiedXmlString = builder.buildObject(newServidor);
      modifiedXmlBufferServidor = Buffer.from(modifiedXmlString, 'utf8');
    }
    if (fileName === 'VantagemDesconto.xml') {
      let itemsVantagemDesconto = [];
      let newVantagemDesconto = null;
      fileContents.forEach(fileContent => {
        const cargoXmlString = fileContent.toString('utf8')
        
        xml2js.parseString(cargoXmlString, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          if (!newVantagemDesconto) {
            newVantagemDesconto = result;
          }
          result.VantagemDesconto.ItemVantagemDesconto.forEach(item => {
            itemsVantagemDesconto.push(item)
          })
        });
      })
      newVantagemDesconto.VantagemDesconto.ItemVantagemDesconto = itemsVantagemDesconto;
      
      const builder = new xml2js.Builder();
      const modifiedXmlString = builder.buildObject(newVantagemDesconto);
      modifiedXmlBufferVantagemDesconto = Buffer.from(modifiedXmlString, 'utf8');
    }
    if (fileName === 'Vinculo.xml') {
      let itemsVinculo = [];
      let newVinculo = null;
      fileContents.forEach(fileContent => {
        const cargoXmlString = fileContent.toString('utf8')
        
        xml2js.parseString(cargoXmlString, (err, result) => {
          if (err) {
            console.error(err);
            return;
          }
          if (!newVinculo) {
            newVinculo = result;
          }
          result.Vinculo.ItemVinculo.forEach(item => {
            itemsVinculo.push(item)
          })
        });
      })
      newVinculo.Vinculo.ItemVinculo = itemsVinculo;
      
      const builder = new xml2js.Builder();
      const modifiedXmlString = builder.buildObject(newVinculo);
      modifiedXmlBufferVinculo = Buffer.from(modifiedXmlString, 'utf8');
    }
    
    console.log(`Handling file ${fileName}`);
    if (fileName === 'Cargo.xml') {
      mergedZip.addFile(fileName, modifiedXmlBufferCargo);
    } else if (fileName === 'ClasseNivelFaixa.xml') {
      mergedZip.addFile(fileName, modifiedXmlBufferClasseNivelFaixa);
    } else if (fileName === 'CodigoVantagemDesconto.xml') {
      mergedZip.addFile(fileName, modifiedXmlBufferCodigoVantagemDesconto);
    } else if (fileName === 'Dependente.xml') {
      mergedZip.addFile(fileName, modifiedXmlBufferDependente);
    } else if (fileName === 'FolhaPagamento.xml') {
      mergedZip.addFile(fileName, modifiedXmlBufferFolhaPagamento);
    } else if (fileName === 'HistoricoFuncional.xml') {
      mergedZip.addFile(fileName, modifiedXmlBufferHistoricoFuncional);
    } else if (fileName === 'Lotacao.xml') {
      mergedZip.addFile(fileName, modifiedXmlBufferLotacao);
    } else if (fileName === 'Servidor.xml') {
      mergedZip.addFile(fileName, modifiedXmlBufferServidor);
    } else if (fileName === 'VantagemDesconto.xml') {
      mergedZip.addFile(fileName, modifiedXmlBufferVantagemDesconto);
    } else if (fileName === 'Vinculo.xml') {
      mergedZip.addFile(fileName, modifiedXmlBufferVinculo);
    } else {
      mergedZip.addFile(fileName, Buffer.concat(fileContents));
    }
  });

  const mergedZipBuffer = mergedZip.toBuffer();

  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', 'attachment; filename="merged.zip"');
  res.send(mergedZipBuffer);
});

app.listen(3333, () => {
  console.log('Server listening on port http://localhost:3333');
});

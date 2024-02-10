function download(url) {
  return new Promise(function exec(resolve, reject) {
    console.log("Starting to download data from", url);
    setTimeout(function down() {
      console.log("Downloading Completed");
      const content = "ABCDEF";
      resolve(content);
    }, 6000);
  });
}

function writeFile(data) {
  return new Promise(function exec(resolve, reject) {
    console.log("Started writing a file with", data);
    setTimeout(function write() {
      console.log("Completed writing the data in a file");
      const filename = "file.txt";
      resolve(filename);
    }, 5000);
  });
}

function uploadData(file, url) {
  return new Promise(function exec(resolve, response) {
    console.log("Stared uploading", file, "on", url);
    setTimeout(function up() {
      console.log("upload completed");
      const response = "success";
      resolve(response);
    }, 2000);
  });
}

async function steps() {
  const downloadedData = await download("www.xyz.com");
  console.log("data downloaded is", downloadedData);
  const fileWritten = await writeFile(downloadedData);
  console.log("files written is", fileWritten);
  const uploadResponse = await uploadData(fileWritten, "www.drive.google.com");
  console.log("upload response is", uploadResponse);
  return uploadResponse;
}

steps();
import { getStorage, ref, getDownloadURL } from "firebase/storage";

  export async function downloadFile(filePath: string): Promise<{ url: string | null; error: Error | null }> {
    try {
      const storage = getStorage();
      const storageRef = ref(storage, filePath);
      const url = await getDownloadURL(storageRef);
      console.log('File available at:', url);
      return { url, error: null };
    } catch (error: any) {
      console.error("Error downloading file:", error);
      //More detailed error handling based on the error code
      if (error.code === 'storage/object-not-found') {
        console.error('File not found in Firebase Storage');
        return { url: null, error: new Error('File not found') };
      } else if (error.code === 'storage/unauthorized'){
        console.error('Unauthorized to access the file')
        return { url: null, error: new Error('Unauthorized Access')};
      }
      return { url: null, error };
    }
  }
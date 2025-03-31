import Edusign from '@_edusign/api';
import { Request, Response } from 'express';


/**
 * Handles the home route for the application.
 *
 * This function creates a new instance of the `Edusign.Blocks` API to generate
 * a structured response containing a title and description for the app. The
 * response is then sent back to the client in JSON format.
 *
 * @param req - The HTTP request object.
 * @param res - The HTTP response object.
 *
 * @returns A JSON response containing the title and description of the app.
 * 
 * @see https://developers.edusign.com/docs/action-documentation
 */
export default async function homeRoute(req: Request, res: Response) {
  const blocksApi = new Edusign.Blocks();

  blocksApi.Title('title', 'coucou');
  blocksApi.Image("uniqueImageId", "https://w0.peakpx.com/wallpaper/82/735/HD-wallpaper-iphone-for-iphone-12-iphone-11-and-iphone-x-iphone-wallp-fond-d-ecran-telephone-fond-d-ecran-iphone-apple-fond-ecran-gratuit-paysage-cool-sphere-thumbnail.jpg", "Image Alt Text");
  blocksApi.Text('description', 'Intégration de ma nouvelle app avec Edusign.');

  res.send(blocksApi.toJson());
}

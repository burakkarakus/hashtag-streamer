import { Request, Response } from "express";
import { ContactController } from "../controllers/controller";


export class Routes {
    public contactController: ContactController = new ContactController();

    public routes(app): void {

        app.route('/')
            .get((req: Request, res: Response) => {
                res.status(200).send({
                    message: 'GET request successful'
                })
            })

        // Contact 
        app.route('/contacts')
            // GET endpoint 
            .get(this.contactController.getContacts)
            // POST endpoint
            .post((req: Request, res: Response) => {
                // Create new contact         
                res.status(200).send({
                    message: 'POST request successfulll!!!!'
                })
            })

        // Contact detail
        app.route('/contact/:contactId')
            // get specific contact
            .get(this.contactController.getContactWithID)
            .put(this.contactController.updateContact)
            .delete(this.contactController.deleteContact);

        // Create a new contact
        app.route('/contact')
            .post(this.contactController.addNewContact);
    }
}
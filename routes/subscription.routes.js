import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send({title: "GET All subscriptions"}));

subscriptionRouter.get('/:id', (req, res) => res.send({title: "GET subscriptions details"}));

subscriptionRouter.post('/', (req, res) => res.send({title: "Create subscriptions"}));

subscriptionRouter.put('/:id', (req, res) => res.send({title: "Update subscriptions"}));

subscriptionRouter.delete('/:id', (req, res) => res.send({title: "Delete subscriptions"}));

subscriptionRouter.get('/user/:id', (req, res) => res.send({title: "GET All user subscriptions"}));

subscriptionRouter.get('/:d/cancel', (req, res) => res.send({title: "Cancel subscriptions"}));

subscriptionRouter.get('/upcomming-renewals', (req, res) => res.send({title: "GET upcommin renewal"}));


export default subscriptionRouter;
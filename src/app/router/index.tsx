import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, MainPage, ProductPage, SchemePage, SchemeSelectionPage, StockPage } from "../../pages";
import { ERoutes } from "./config";
import BrandRegistrationPage from "../../pages/crm/BrandRegistrationPage";
import { AuthPopup } from "../auth/components";


export const router = createBrowserRouter([
    {
        path: ERoutes.Default,
        element: <AuthPopup><MainPage /></AuthPopup>
    },
    {
        path: `${ERoutes.CrmScheme}/:schemeId`,
        element: <AuthPopup><SchemePage /></AuthPopup>
    },
    {
        path: ERoutes.CrmSchemesMain,
        element: <AuthPopup><SchemeSelectionPage /></AuthPopup>
    },
    {
        path: ERoutes.CrmBrandRegistration,
        element: <AuthPopup><BrandRegistrationPage /></AuthPopup>
    },
    {
        path: ERoutes.Error,
        element: <AuthPopup><ErrorPage /></AuthPopup>
    },
    {
        path: ERoutes.CrmStock,
        element: <AuthPopup><StockPage /></AuthPopup>
    },
    {
        path: `${ERoutes.CrmProduct}/:id`,
        element: <AuthPopup><></></AuthPopup>
    },
    {
        path: `${ERoutes.Product}/:id`,
        element: <AuthPopup><ProductPage /></AuthPopup>
    },
])

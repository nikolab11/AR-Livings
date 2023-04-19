import axios from "axios";
import { t } from "i18next";
import Swal from "sweetalert2";

const api = axios.create({
  baseURL: "https://arliving.herokuapp.com/arliving",
  headers: {
    /*       'X-API-KEY': API_KEY, */
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export const loadTranslations = async () => {
  try {
    const response = await api.get(`/translations_formatted`);
    if (response?.data) {
      return response.data;
    }
  } catch (err) {
    return console.log(err);
  }
};

export const getAppData = async () => {
  try {
    const response = await api.get(`/load_all_data`);
    if (response?.data) {
      return response.data;
    }
  } catch (err) {
    return console.log(err);
  }
};

export const contact = async (body) => {
  try {
    const response = await api.post("/customer_message", body);
    const data = response.data;
    if (data?.success) {
      Swal.fire({
        title: t("/contact-success-notification-title"),
        text: t("/contact-success-notification-subtitle"),
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#008f97",
      });
    } else alert(data?.message);
  } catch (err) {
    return console.log(err);
  }
};

export const newsletter = async (email) => {
  try {
    const response = await api.post("/newsletter", { email });
    const data = response.data;
    if (data?.success) {
      Swal.fire({
        title: t("/newsletter-success-notification-title"),
        text: t("/newsletter-success-notification-subtitle"),
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#008f97",
      });
    } else alert(data?.message);
  } catch (err) {
    return console.log(err);
  }
};

export const makeReservation = async (body) => {
  try {
    const response = await api.post("/add_reservation", body);
    const data = response.data;
    console.log(data);
    if (data?.success) {
      Swal.fire({
        title: t("reservation-success-notification-title"),
        text: t("reservation-success-notification-subtitle"),
        icon: "success",
        confirmButtonText: "Ok",
        confirmButtonColor: "#008f97",
      });
      return true;
    } else alert(data?.message);
  } catch (err) {
    return console.log(err);
  }
};

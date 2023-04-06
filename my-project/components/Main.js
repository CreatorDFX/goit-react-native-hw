import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import useRoute from "../helpers/router";
import { authStateChangeUser } from "../redux/auth/authOperations";
import { selectIsRefreshing, selectUserId, selectUserName } from "../redux/auth/authSelectors";

const Main = () => {
  const user = useSelector(selectUserId);
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, [user]);

  const routing = useRoute(user);

  return  <>{!isRefreshing &&  <NavigationContainer>{routing}</NavigationContainer>}</>;
};

export default Main;
(ns adzerk.boot-reload.init4125 (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:58106" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})
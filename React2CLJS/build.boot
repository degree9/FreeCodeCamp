;; Boot Env Settings ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(set-env!
 :dependencies   '[[org.clojure/clojure       "1.7.0"         :scope "provided"]
                   [org.clojure/clojurescript "1.7.228"       :scope "provided"]
                   [adzerk/boot-cljs          "1.7.228-1"     :scope "provided"]
                   [adzerk/boot-reload        "0.4.12"        :scope "test"]
                   [degree9/boot-semver       "1.3.6"         :scope "test"]
                   [pandeiro/boot-http        "0.7.3"         :scope "test"]
                   [hoplon/boot-hoplon        "0.3.0-SNAPSHOT"]
                   [hoplon/hoplon             "6.0.0-alpha17"]]
 :resource-paths #{"src"})

;; Require Boot Task Namespaces ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(require
 '[adzerk.boot-cljs :refer [cljs]]
 '[adzerk.boot-reload :refer [reload]]
 '[degree9.boot-semver :refer [version]]
 '[hoplon.boot-hoplon :refer [hoplon]]
 '[pandeiro.boot-http :refer [serve]])

;; Boot Task Options ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(task-options! cljs {:source-map true})

;; Boot Tasks ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(deftask develop
  "Build project for development."
  []
  (comp
    (watch)                       ;; Built-in
    (version)                     ;; From boot-semver
    (hoplon)                      ;; From boot-hoplon
    (reload)                      ;; From boot-reload
    (cljs)                        ;; From boot-cljs
    (target :dir #{"target"})     ;; Built-in
    (serve :port 8000)))          ;; From boot-http

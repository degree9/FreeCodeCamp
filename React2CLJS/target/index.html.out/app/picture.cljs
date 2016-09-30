(ns app.picture (:require [hoplon.bidi :as bidi] [app.routing :as routing] [javelin.core :refer [->Cell input? cell cell? destroy-cell! lift lens? set-formula! cell-doseq* deref* set-cell! lens formula? alts! dosync* cell-map formula]] [hoplon.jquery :refer [check-val! text-val!]] [hoplon.core :refer [form audio input menuitem hgroup do! timeout $text base h1 set-attributes! embed shadow h3 body keygen progress main cite on-page-load i p nav ruby a menu blockquote img $comment span track data u dl select html thead del fieldset aside figure figcaption q on! bdi append-child! video address caption dd rp hr tbody table html-var add-initfn! pre ul replace-child! html-time html-map sup dfn sub mark script button wbr insert-before! strong li dt rtc td tr section th optgroup bust-cache iframe remove-child! legend em kbd spliced html-object article abbr template multicol prerendering? <!-- source output set-styles! route-cell header datalist tfoot s ins footer title h5 canvas param div option summary samp small style textarea loop-tpl* h4 head ol details col label picture rt when-dom h6 link page-load colgroup meter html-meta static-elements bdo --> b code dialog noframes do-watch noscript safe-nth h2 area br]]) (:require-macros [javelin.core :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]] [hoplon.core :refer [text elem+ cache-key with-timeout defelem+ when-tpl static sexp defelem elem def-values if-tpl cond-tpl with-page-load for-tpl with-dom case-tpl loop-tpl with-interval with-init!]]))



(def images {:1 "http://mrmrs.io/photos/v/022.jpg"
             :2 "http://mrmrs.io/photos/v/024.jpg"
             :3 "http://mrmrs.io/photos/050.jpg"
             :4 "http://mrmrs.io/photos/049.jpg"
             :5 "http://mrmrs.io/photos/051.jpg"
             :6 "http://mrmrs.io/photos/u/001.jpg"
             :7 "http://mrmrs.io/photos/u/002.jpg"
             :8 "http://mrmrs.io/photos/u/003.jpg"
             :9 "http://mrmrs.io/photos/u/004.jpg"})

(def backgrounds {:1 "bg-light-gray"
                  :2 "bg-white"
                  :3 "bg-near-white"
                  :4 "bg-light-gray"
                  :5 "bg-near-white"
                  :6 "bg-white"
                  :7 "bg-light-purple"
                  :8 "bg-moon-gray"
                  :9 "bg-washed-red"})

(def params (bidi/route-params routing/routes))

(def param-id (cell= (:id params)))

(def image (cell= (when param-id (get-in images [(keyword param-id)]))))

(def bg (cell= (when param-id (get-in backgrounds [(keyword param-id)]))))

(defc enlarge nil)

(defelem index [attr kids]
  (main :class (cell= (conj [bg] :cf :pa3 :pa4-m :pa5-l :mw-100 :min-vh-100 :center))
    (div :class "fr w-100 w-80-l"
      (p :class "f6" "Beitrage zut")
      (a :class "link dim black hover-mid-gray"
        (h1 :class "f2 f1-l lh-title mt0 mb4 mb5-ns"
          "Kunst"
          (br :class "dn db-ns")
          "des 19. und 20.Jahrhunderts")))
    (div :class "f6 lh-copy fl w-100 mb4"
      (div :class "fl-ns w-100 w-20-l pr3-m pr5-l"
        (p "Jahrbuch" (small :class "fw6" "1968/69")))
      (div :class "fl-ns w-50-m w-20-l pr3-m pr5-l"
        (p "Institut suisse pour l'étude de l'art"))
      (div :class "fl-ns w-50-m w-20-l pr3-m pr5-l"
        (p "Schweizerisches" (br :class "dn db-l") "Institut für Kunstwissenschaft"))
      (div :class "fl-ns w-50-m w-20-l pr3-m pr5-l"
        (p "Istituto svizzero di studi d'arte"))
      (div :class "fl-ns w-50-m w-20-l pr3-m pr5-l"
        (p "Swiss Institute for Art Research")))
    (if-tpl enlarge
      (div :class (cell= (conj [bg] :absolute :top-0 :right-0 :bottom-0 :left-0 :w-100 :z-999))
        (img :src image
             :click #(swap! enlarge not)
             :class "absolute top-0 right-0 bottom-0 left-0 w-100 pointer"
             :role "presentation"))
        (img :src image
             :click #(swap! enlarge not)
             :class "db center grow pointer dim"
             :role "presentation"))))

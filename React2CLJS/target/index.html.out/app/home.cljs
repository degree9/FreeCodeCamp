(ns app.home (:require [javelin.core :refer [->Cell input? cell cell? destroy-cell! lift lens? set-formula! cell-doseq* deref* set-cell! lens formula? alts! dosync* cell-map formula]] [hoplon.jquery :refer [check-val! text-val!]] [hoplon.core :refer [form audio input menuitem hgroup do! timeout $text base h1 set-attributes! embed shadow h3 body keygen progress main cite on-page-load i p nav ruby a menu blockquote img $comment span track data u dl select html thead del fieldset aside figure figcaption q on! bdi append-child! video address caption dd rp hr tbody table html-var add-initfn! pre ul replace-child! html-time html-map sup dfn sub mark script button wbr insert-before! strong li dt rtc td tr section th optgroup bust-cache iframe remove-child! legend em kbd spliced html-object article abbr template multicol prerendering? <!-- source output set-styles! route-cell header datalist tfoot s ins footer title h5 canvas param div option summary samp small style textarea loop-tpl* h4 head ol details col label picture rt when-dom h6 link page-load colgroup meter html-meta static-elements bdo --> b code dialog noframes do-watch noscript safe-nth h2 area br]]) (:require-macros [javelin.core :refer [with-let mx2 dosync cell= set-cell!= prop-cell cell-doseq defc cell-let-1 defc= macroexpand-all mx cell-let]] [hoplon.core :refer [text elem+ cache-key with-timeout defelem+ when-tpl static sexp defelem elem def-values if-tpl cond-tpl with-page-load for-tpl with-dom case-tpl loop-tpl with-interval with-init!]]))

(defelem index [attr kids]
  (main :class [:w-100 :cf :helvetica :dark-gray :bg-white :pa3 :pa4-m :pa5-l :mw9 :center]
    (div :class [:fl :w-50 :pr2 :pr3-l :mb3 :mb4-l]
      (div :class [:cover :pv5 :pv6-m :pv7-l :pic1 :grow :pointer]))
    (div :class [:fl :w-50 :w-25-l :pl2 :pr2-m :ph2-l :mb3 :mb4-l]
      (div :class "cover pv5 pv6-m pv7-l pic2 grow pointer"))
    (div :class "fl w-50 w-50 w-25-l pr2 pr0-l pl3-l mb3 mb4-l"
      (div :class "cover pv5 pv6-m pv7-l pic3 grow pointer"))
    (div :class "fl w-50 w-50 w-25-l pl2 pl0-l pr2-m pr4-l mb3 mb4-l"
      (div :class "cover pv5 pv6-m pv7-l pic4 grow pointer"))
    (div :class "fl w-100 w-50-l pr2-l pl2-ns mb4 mb0-l mb4 outline"
      (div :class [:pa4])
      (h1 :class [:f4 :f2-l :fw7 :mt0 :pv3-l :bb-l :bb--black] "#004")
      (p :class "lh-copy mt2 mt3-m mt5-l f6"
        (span :class "db-ns f6 fw7 lh-solid mb3 mb0-m mb4-l"
          "Mies, my great mentor said:")
        (span :class [:fw9 :f6 :f1-l :db :lh-title :mb3 :mb4-l]
          "God is in the details.")
        (span :class [:db-l :measure-wide]
          "That is the essence of syntax: the discipline that controls the proper
          use of grammar in the construction of phrases and the articulation of
          a language, Design. The syntax of design is provided by many components
          in the nature of the project.")))
    (div :class "cf"
      (div :class "fl w-100 w-25-l pl3-l mb3 mb4-l"
        (div :class "cover pv5 pv6-m pv7-l pic5 grow pointer"))
      (div :class [:fl :w-100 :w-25-l :pr3-l]
        (p :class "lh-copy measure f6 pt3 pt0-l mt0 mb3 mb4-l center"
          (span :class [:fw6] "For us Graphic Design is “organization of information.”")
          "There are other types of graphic design more concerned with illustration or of a
          narrative nature.  Nothing could be more useful to reach our intention
          than the Grid. The grid represents the basic structure of our graphic
          design, it helps to organize the content, it provides consistency, it
          gives an orderly look and it projects a level of intellectual elegance
          that we like to express.  There are in nite kinds of grids, but just
          one - the most appropriate - for any problem. Therefore, it becomes
          important to know which kind of grid is the most appropriate. The basic
          understanding is that the smaller the module of the grid the least
          helpful it could be. We could say that an empty page is a page with an
          in nitesimal small grid. Therefore, it is equivalent to not being
          there. Conversely a page with a coarse grid is a very restricting grid
          offering too few alternatives. The secret is to  nd the proper kind of            grid for the job at hand. Sometimes, in designing a grid we want to
          have the outside margins small enough to provide a certain tension
          between the edges of the page and the content. After that we divide the
          page in a certain number of columns according to the content, three,
          two, four,  ve, six, etc. Columns provide only one kind of consistency,
          but we also need to have an horizontal frame of reference to assure
          certain levels of continuity throughout the publication. Therefore, we
          will divide the page from top to bottom in a certain number of Modules,
          four, six, eight, or more, according to size and need. Once we have
          structured the page, we will begin to structure the information and
          place it in the grid in such a way that the clarity of the message will
          be enhanced by the placement of the text on the grid. There are in nite
          ways of doing this and that is why the grid is a useful tool, rather
          than a constricting device."))
      (div :class "fl w-100 w-75-l pv0 mv0"
        (div :class "fl w-100 mb2 mb4-l"
          (div :class "cover pv5 pv6-l pic6 grow pointer"))
        (div :class "fl w-25 mb2 mb4-l"
          (div :class "cover pv5 pv6-m pv7-l pic7 grow pointer"))
        (div :class "fl w-75 pl2 pl4-l mb2 mb4-l"
          (div :class "cover pv5 pv6-m pv7-l pic8 grow pointer"))
        (div :class "fl w-100 mb2 mb4-l"
          (div :class "cover pv5 pv6-ns pic9 grow pointer"))))))
